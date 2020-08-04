import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import DogsList from './DogsList';

function DogsApp(props) {
    return (
        <>
            <DogsList viewer={props.viewer} match={props.match}/>
            <Link to={props.match.url + "/add"}>
                <Button variant="primary">Add a dog!</Button>
            </Link>
        </>
    );
}

export default createFragmentContainer(DogsApp, {
    viewer: graphql`
        fragment DogsApp_viewer on User {
            id
            ...DogsList_viewer
        }
    `,
});
