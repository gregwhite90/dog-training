import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import TrainingStageCard from 'components/training_stages/TrainingStageCard';

import type { match } from 'react-router-dom';
import type { BehaviorTrainingStagesList_behavior } from '__generated__/BehaviorTrainingStagesList_behavior.graphql';

// TODO: import "match params" (empty object because hardcoded route) from parent component?
interface BehaviorTrainingStagesListProps {
    behavior: BehaviorTrainingStagesList_behavior,
    match: match<{}>,
}

const BehaviorTrainingStagesList: React.FC<BehaviorTrainingStagesListProps> = (props) => {
    const edges =
        props && props.behavior && props.behavior.trainingStages && props.behavior.trainingStages.edges
            ? props.behavior.trainingStages.edges.filter(Boolean)
            : [];
    return (
        <>
            {edges.map(edge => {
                return (
                    <Link to={`/stages/${edge!.node!.id}`}>
                        <TrainingStageCard key={edge!.node!.id} trainingStage={edge!.node!} />
                    </Link>
                );
            })}
        </>
    );
}

export default createFragmentContainer(BehaviorTrainingStagesList, {
    behavior: graphql`
        fragment BehaviorTrainingStagesList_behavior on Behavior {
            id
            trainingStages(
                first: 2147483647 # max GraphQLInt
            ) @connection(key: "BehaviorTrainingStagesList_trainingStages") {
                edges {
                    node {
                        id
                        ...TrainingStageCard_trainingStage
                    }
                }
            }
        }
    `,
});
