import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthS3Image from './AuthS3Image';

import { withAuth0 } from '@auth0/auth0-react';

import * as SparkMD5 from 'spark-md5';

import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
const Uppy = require('@uppy/core');
const AwsS3 = require('@uppy/aws-s3');


// TODO: probably pass in styling information. Especially sizing

/**
 * Based on: https://github.com/satazor/js-spark-md5
 */
function md5Checksum(file, chunk_megabytes = 2) {
    return new Promise((resolve, reject) => {
        var blobSlice = (File.prototype.slice ||
                         File.prototype.mozSlice ||
                         File.prototype.webkitSlice);
        const chunkSize = chunk_megabytes * 1024 * 1024;
        const chunks = Math.ceil(file.size / chunkSize);
        var currentChunk = 0;
        const spark = new SparkMD5.ArrayBuffer();
        const fileReader = new FileReader();

        fileReader.onload = function (e) {
            spark.append(e.target.result); // Append array buffer
            currentChunk++;

            if (currentChunk < chunks) {
                loadNext();
            } else {
                resolve(btoa(spark.end(true)));  // Compute hash
            }
        };

        fileReader.onerror = function (error) {
            reject(error);
        };

        function loadNext() {
            const start = currentChunk * chunkSize;
            const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

            fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
        }

        loadNext();
    });
}


class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.getSignedRequest = this.getSignedRequest.bind(this);
        this.uppy = Uppy({
            restrictions: {
                maxNumberOfFiles: 1,
                allowedFileTypes: ["image/*"]
            },
            allowMultipleUploads: false,
        });
        this.uppy.on('complete', ({successful, failed}) => {
            successful.forEach((file) => {
                console.log(`Successful upload to: ${file.uploadURL}`);
                props.savePicture({picture: file.uploadURL});
            });
        });
    }

    componentDidMount() {
        this.uppy.use(AwsS3, {
            getUploadParameters (file) {
                // TODO: don't try to hash if connecting from remote provider
                return md5Checksum(file.data).then((hash) => {
                    return this.getSignedRequest(
                        file, hash, this.props.pathArray
                    ).then(data => data);
                });
            }
        });
    }

    componentWillUnmount() {
        this.uppy.close();
    }

    // TODO: call this.props.onFinishUploading? reset state?

    // TODO: authorization to get an S3 signed key
    getSignedRequest(file, hash, pathArray) {
        console.log('in getSignedRequest');
        return this.props.auth0.getAccessTokenSilently({
            audience: 'https://dog-training-staging.herokuapp.com/graphql',
            scope: 'write:assets',
        }).then(token => {
            const file_name = encodeURIComponent(file.name);
            const file_type = encodeURIComponent(file.type);

            return fetch(
                `https://dog-training-staging.herokuapp.com/sign-s3/put?file_name=${file_name}&file_type=${file_type}&hash=${hash}&pathArray=${encodeURIComponent(JSON.stringify(pathArray))}`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                })
                .then(response => response.json())
                .then(data => {
                    return {
                        method: data.method,
                        url: data.url,
                        fields: data.fields,
                        headers: {
                            'Content-Type': file.type,
                            'Content-MD5': hash,
                        },
                    }
                });
        });
    }

    render() {
        return <Dashboard uppy={this.uppy} {...this.props}/>
    }
}

export default withAuth0(ImageUpload);
