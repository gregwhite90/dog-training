import React from 'react';
import Image from 'react-bootstrap/Image';
import { withAuth0 } from '@auth0/auth0-react';

class AuthS3Image extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const file_name = encodeURIComponent(this.props.picture);
        return this.props.auth0.getAccessTokenSilently({
            audience: 'https://dog-training-staging.herokuapp.com/graphql',
            scope: 'edit:assets',
        })
        .then(token => {
            const {response, error} = fetch(
                `https://dog-training-staging.herokuapp.com/sign-s3?file_name=${file_name}&operation=getObject`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
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
                this.props.src = response.signedRequest;
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        return <Image {...this.props}/>;
    }

}


export default withAuth0(AuthS3Image);
