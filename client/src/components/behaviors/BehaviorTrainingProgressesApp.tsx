import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import BehaviorTrainingProgressesList from './BehaviorTrainingProgressesList';

import type { BehaviorTrainingProgressesApp_behavior } from '__generated__/BehaviorTrainingProgressesApp_behavior.graphql';
import type { match } from 'react-router-dom';

interface BehaviorTrainingProgressesAppProps {
    behavior: BehaviorTrainingProgressesApp_behavior,
    match: match<{}>,
};

const BehaviorTrainingProgressesApp: React.FC<BehaviorTrainingProgressesAppProps> = (props) => {
    return (
        <BehaviorTrainingProgressesList behavior={props.behavior} match={props.match} />
    );
}

export default createFragmentContainer(BehaviorTrainingProgressesApp, {
    behavior: graphql`
        fragment BehaviorTrainingProgressesApp_behavior on Behavior {
            ...BehaviorTrainingProgressesList_behavior
        }
    `,
});
