import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import DogsList from './DogsList';

function DogsApp(props) {
    return <DogsList viewer={props.viewer} />;
}

export default createFragmentContainer(DogsApp, {
    viewer: graphql`
        fragment DogsApp_viewer on User {
            id
            ...DogsList_viewer
        }
    `,
});
