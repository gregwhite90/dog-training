import React from 'react';
import Image from 'react-bootstrap/Image';
import { withAuth0 } from '@auth0/auth0-react';

class AuthS3Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {src: null};
    }

    componentDidMount() {
        const file_name = encodeURIComponent(this.props.picture);
        return this.props.auth0.getAccessTokenSilently({
            audience: 'https://dog-training-staging.herokuapp.com/graphql',
            scope: 'read:assets',
        })
        .then(token => {
            const data = fetch(
                `https://dog-training-staging.herokuapp.com/sign-s3/get?file_name=${file_name}`,
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
            console.log('Checking for the signed request in AuthS3Image');
            console.log(data);
            if (data) {
                // TODO: ensure this exists
                // TODO: handle failure gracefully
                this.setState({src: data.signedRequest});
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        return <Image src={this.state.src} {...this.props.toImageChild}/>;
    }

}


export default withAuth0(AuthS3Image);
