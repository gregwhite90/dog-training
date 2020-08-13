import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import DogsList from './DogsList';

import type { DogsApp_viewer } from '__generated__/DogsApp_viewer.graphql';
import type { match } from 'react-router-dom';

interface DogsAppProps {
    viewer: DogsApp_viewer,
    match: match<{}>,
};

const DogsApp: React.FC<DogsAppProps> = (props) => {
    return (
        <>
            <h3>My dogs</h3>
            <DogsList viewer={props.viewer} match={props.match} />
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
