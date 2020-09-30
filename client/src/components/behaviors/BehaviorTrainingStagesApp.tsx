import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import BehaviorTrainingStagesList from './BehaviorTrainingStagesList';

import type { BehaviorTrainingStagesApp_behavior } from '__generated__/BehaviorTrainingStagesApp_behavior.graphql';
import type { match } from 'react-router-dom';

interface BehaviorTrainingStagesAppProps {
    behavior: BehaviorTrainingStagesApp_behavior,
    match: match<{}>,
};

const BehaviorTrainingStagesApp: React.FC<BehaviorTrainingStagesAppProps> = (props) => {
    return (
        <BehaviorTrainingStagesList behavior={props.behavior} match={props.match} />
    );
}

export default createFragmentContainer(BehaviorTrainingStagesApp, {
    behavior: graphql`
        fragment BehaviorTrainingStagesApp_behavior on Behavior {
            ...BehaviorTrainingStagesList_behavior
        }
    `,
});
