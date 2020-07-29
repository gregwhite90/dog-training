import React from 'react';
import Image from 'react-bootstrap/Image';

import { withAuth0 } from '@auth0/auth0-react';

class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { progress: -1 };
    }

    // TODO: authorization to get an S3 signed key
    getSignedRequest(file) {
        const file_name = encodeURIComponent(file.name);
        const file_type = encodeURIComponent(file.type);

        return fetch(
            `/sign-s3?file_name=${file_name}&file_type=${file_type}`,
            {
                method: 'GET',
            })
            .then(response => {
                if (response.ok) {
                    return response = response.json();
                }
                // TODO: error-handling
            })
            .catch(error => {
                this.props.onFinishUploading(null);
                this.setState({ error, progress: -1 });
            });
    }

    uploadFile(file, signedRequest, url) {
        return fetch(signedRequest, {
            method: 'PUT',
        })
            .then(response => {
                if (response.ok) {
                    return url;
                }
                // TODO: error-handling code
            })
            .catch(error => {
                this.props.onFinishUploading(null);
                this.setState({ error, progress: -1});
            });
    }

    async handleFileChange(e) {
        if (!e.target.files) {
            return;
        }
        let file = e.target.files[0];

        this.setState({ error: undefined, progress: 0 });
        this.props.onStartUploading();

        let { signedRequest, url } = await this.getSignedRequest(file);
        await this.uploadFile(file, signedRequest, url);

        this.props.value = url;

        this.props.onFinishUploading(url);
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
                    <label className="button">
                        Upload new picture
                        <input
                            hidden
                            type="file"
                            accept="image/*"
                            onChange={() => this.handleFileChange}
                        />
                    </label>
                </div>

            </div>
        );
    }
}

export default withAuth0(ImageUpload);
