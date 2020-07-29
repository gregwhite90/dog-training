import React from 'react';
import Image from 'react-bootstrap/Image';

import { withAuth0 } from '@auth0/auth0-react';

class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { progress: -1 };
    }

    handleUploadingError(error) {
        console.log('Got an error');
        console.log(error);
        this.props.onFinishUploading(null);
        this.setState({ error, progress: -1 });
        return {error};
    }

    // TODO: authorization to get an S3 signed key
    getSignedRequest(file) {
        console.log('in getSignedRequest');
        const file_name = encodeURIComponent(file.name);
        const file_type = encodeURIComponent(file.type);

        return fetch(
            `https://dog-training-staging.herokuapp.com/sign-s3?file_name=${file_name}&file_type=${file_type}&operation=putObject`,
            {
                method: 'GET',
            })
            .then(response => {
                console.log('Got a response!');
                console.log(response);
                if (response.ok) {
                    return {response: response.json()};
                }
                // TODO: error-handling
                return this.handleUploadingError('Response not ok.');
            })
            .catch(error => {
                return this.handleUploadingError(error);
            });
    }

    uploadFile(file, signedRequest, url) {
        return fetch(signedRequest, {
            method: 'PUT',
            body:file,
        })
            .then(response => {
                console.log('Got a response');
                console.log(response);
                if (response.ok) {
                    this.props.value = url;
                    this.props.onFinishUploading(url);
                    return {response: url};
                }
                // TODO: error-handling code
                return this.handleUploadingError('Response not ok.');
            })
            .catch(error => {
                return this.handleUploadingError(error);
            });
    }

    async handleFileChange(e) {
        console.log('handling file change');
        console.log(e.target);
        if (!e.target.files) {
            return;
        }
        let file = e.target.files[0];

        console.log(file);

        this.setState({ error: undefined, progress: 0 });
        this.props.onStartUploading();

        console.log('getting signed request');

        let { error,
              response: {
                  signedRequests: {
                      getObject,
                      putObject
                  }
              }
        } = await this.getSignedRequest(file);
        console.log('request signed');
        console.log(putObject);
        console.log(getObject);
        let upload_result = await this.uploadFile(file, putObject, getObject);
        this.setState({ error: undefined, progress: -1 });

    }

    render() {
        return (
            <div>
                <div>
                    {this.props.value !== '' &&
                     this.state.progress === -1 &&
                     <Image src={this.props.value} />}
                    <div style={{ maxWidth: 144 }}>
                        {this.state.progress > -1 &&
                         <div>Uploading...</div>}
                    </div>
                </div>
                <div style={{ marginTop: 10 }}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => this.handleFileChange(e)}
                    />
                </div>

            </div>
        );
    }
}

export default withAuth0(ImageUpload);
