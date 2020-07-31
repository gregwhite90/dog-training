import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthS3Image from './AuthS3Image';

import { withAuth0 } from '@auth0/auth0-react';

import * as SparkMD5 from 'spark-md5';

// TODO: probably pass in styling information. Especially sizing

class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: -1,
            error: null,
            src: null,
        };
        this.handleUploadingError = this.handleUploadingError.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.getSignedRequest = this.getSignedRequest.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    handleUploadingError(error) {
        console.log('Got an error');
        console.log(error);
        this.props.onFinishUploading(null);
        this.setState({ error, progress: -1 });
        return {error};
    }

    // TODO: authorization to get an S3 signed key
    getSignedRequest(file, hash) {
        console.log('in getSignedRequest');
        return this.props.auth0.getAccessTokenSilently({
            audience: 'https://dog-training-staging.herokuapp.com/graphql',
            scope: 'write:assets',
        }).then(token => {
            const file_name = encodeURIComponent(file.name);
            const file_type = encodeURIComponent(file.type);

            return fetch(
                `https://dog-training-staging.herokuapp.com/sign-s3/put?file_name=${file_name}&file_type=${file_type}&hash=${hash}`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                })
                .then(response => response.json())
                .then(data => data)
                .catch(error => {
                    return this.handleUploadingError(error);
                });
        });
    }

    /**
     * Based on: https://github.com/satazor/js-spark-md5
     */
    md5Checksum(file, chunk_megabytes = 2) {
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

    uploadFile(file, signedRequest, hash) {
        return fetch(signedRequest, {
            method: 'PUT',
            headers: {
                'Content-Type': file.type,
                'Content-MD5': hash,
            },
            body: file,
        })
            .then(response => {
                console.log(response.text().then(data => data));
                // TODO: handle failure more gracefully
                if (!response.ok) {
                    throw new Error('Upload failed');
                }
            })
            .catch(error => {
                return this.handleUploadingError(error);
            });
    }

    async handleFileChange(e) {
        if (!e.target.files) {
            return;
        }
        let file = e.target.files[0];

        this.setState({ error: undefined, progress: 0 });
        this.props.onStartUploading();

        let hash = await this.md5Checksum(file);

        let { signedRequest, key } = await this.getSignedRequest(file, hash);
        console.log('request signed');
        console.log(signedRequest);
        console.log(key);
        await this.uploadFile(file, signedRequest, hash);
        this.setState({ src: key, error: undefined, progress: -1 });
        this.props.onFinishUploading(key);
    }

    render() {
        return <input type="file" accept="image/*" onChange={this.handleFileChange} />;
    }
}

export default withAuth0(ImageUpload);
