import React from 'react';
import AuthS3Image from './AuthS3Image';

import { withAuth0 } from '@auth0/auth0-react';

// TODO: probably pass in styling information. Especially sizing

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
        return this.props.auth0.getAccessTokenSilently({
            audience: 'https://dog-training-staging.herokuapp.com/graphql',
            scope: 'edit:assets',
        }).then(token => {
            const file_name = encodeURIComponent(file.name);
            const file_type = encodeURIComponent(file.type);

            return fetch(
                `https://dog-training-staging.herokuapp.com/sign-s3?file_name=${file_name}&file_type=${file_type}&operation=putObject`,
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

    // TODO: add an MD5 integrity check to the upload

    uploadFile(file, signedRequest) {
        fetch(signedRequest, {
            method: 'PUT',
            body: file,
        })
            .then(response => {
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

        let { signedRequest, key } = await this.getSignedRequest(file);
        console.log('request signed');
        console.log(signedRequest);
        console.log(key);
        await this.uploadFile(file, signedRequest);
        this.props.picture = key;
        this.props.onFinishUploading(key);
        this.setState({ error: undefined, progress: -1 });
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.picture &&
                     this.props.picture !== '' &&
                     this.state.progress === -1 &&
                     <AuthS3Image picture={this.props.picture} />}
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
