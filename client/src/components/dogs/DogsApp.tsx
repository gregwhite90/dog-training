import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import DogsList from './DogsList';

import type { DogsApp_viewer } from '__generated__/DogsApp_viewer.graphql';
import type { match } from 'react-router-dom';

interface DogsAppProps {
    viewer: DogsApp_viewer,
    match: match<{}>,
};

const DogsApp: React.FC<DogsAppProps> = (props) => {
    return (
        <DogsList viewer={props.viewer} match={props.match} />
    );
}

export default createFragmentContainer(DogsApp, {
    viewer: graphql`
        fragment DogsApp_viewer on User {
            ...DogsList_viewer
        }
    `,
});
