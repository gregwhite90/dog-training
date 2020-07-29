import React from 'react';
import Image from 'react-bootstrap/Image';

class AuthS3Image extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const file_name = encodeURIComponent(this.props.picture);
        const {response, error} = fetch(
            `https://dog-training-staging.herokuapp.com/sign-s3?file_name=${file_name}&operation=getObject`,
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
                return {error: 'Response not ok.'};
            })
            .catch(error => {
                return {error};
            });
        if (!error && response) {
            // TODO: ensure this exists
            // TODO: handle failure gracefully
            this.props.src = response.signedRequests.getObject;
        }
    }

    render() {
        return <Image {...this.props}/>;
    }

}


export default AuthS3Image;
