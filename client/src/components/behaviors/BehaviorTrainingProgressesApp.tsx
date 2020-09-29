import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import BehaviorTrainingProgressesList from './BehaviorTrainingProgressesList';
import BehaviorName from './BehaviorName';

import type { BehaviorTrainingProgressesApp_behavior } from '__generated__/BehaviorTrainingProgressesApp_behavior.graphql';
import type { match } from 'react-router-dom';

interface BehaviorTrainingProgressesAppProps {
    behavior: BehaviorTrainingProgressesApp_behavior,
    match: match<{}>,
};

const BehaviorTrainingProgressesApp: React.FC<BehaviorTrainingProgressesAppProps> = (props) => {
    return (
        <>
            <h3>Training progress for{' '}
                <BehaviorName
                    behavior={props.behavior}
                />
            </h3>
            <BehaviorTrainingProgressesList behavior={props.behavior} match={props.match} />
        </>
    );
}

export default createFragmentContainer(BehaviorTrainingProgressesApp, {
    behavior: graphql`
        fragment BehaviorTrainingProgressesApp_behavior on Behavior {
            id
            ...BehaviorName_behavior
            ...BehaviorTrainingProgressesList_behavior
        }
    `,
});
