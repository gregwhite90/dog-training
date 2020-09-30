import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import DogBehaviorsList from './DogBehaviorsList';

import type { DogBehaviorsApp_dog } from '__generated__/DogBehaviorsApp_dog.graphql';
import type { match } from 'react-router-dom';

interface DogBehaviorsAppProps {
    dog: DogBehaviorsApp_dog,
    match: match<{}>,
};

const DogBehaviorsApp: React.FC<DogBehaviorsAppProps> = (props) => {
    return (
        <DogBehaviorsList dog={props.dog} match={props.match} />
    );
}

export default createFragmentContainer(DogBehaviorsApp, {
    dog: graphql`
        fragment DogBehaviorsApp_dog on Dog {
            ...DogBehaviorsList_dog
        }
    `,
});
