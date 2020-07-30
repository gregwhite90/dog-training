import React from 'react';
import Image from 'react-bootstrap/Image';
import { withAuth0 } from '@auth0/auth0-react';

class AuthS3Image extends React.Component {

    componentDidMount() {
        const file_name = encodeURIComponent(this.props.picture);
        return this.props.auth0.getAccessTokenSilently({
            audience: 'https://dog-training-staging.herokuapp.com/graphql',
            scope: 'edit:assets',
        })
        .then(token => {
            const data = fetch(
                `https://dog-training-staging.herokuapp.com/sign-s3?file_name=${file_name}&operation=getObject`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                })
                .then(response => response.json())
                .then(data => data)
                .catch(error => console.log(error));
            if (data) {
                // TODO: ensure this exists
                // TODO: handle failure gracefully
                this.props.src = data.signedRequest;
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        return <Image {...this.props}/>;
    }

}


export default withAuth0(AuthS3Image);
