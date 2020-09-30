import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import DogTrainingSessionsList from './DogTrainingSessionsList';

import type { DogTrainingSessionsApp_dog } from '__generated__/DogTrainingSessionsApp_dog.graphql';
import type { match } from 'react-router-dom';

interface DogTrainingSessionsAppProps {
    dog: DogTrainingSessionsApp_dog,
    match: match<{}>,
};

const DogTrainingSessionsApp: React.FC<DogTrainingSessionsAppProps> = (props) => {
    return (
        <DogTrainingSessionsList dog={props.dog} match={props.match} />
    );
}

export default createFragmentContainer(DogTrainingSessionsApp, {
    dog: graphql`
        fragment DogTrainingSessionsApp_dog on Dog {
            ...DogTrainingSessionsList_dog
        }
    `,
});
