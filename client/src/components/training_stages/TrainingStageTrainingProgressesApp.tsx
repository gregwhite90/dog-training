import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import TrainingStageTrainingProgressesList from './TrainingStageTrainingProgressesList';
import TrainingStageName from './TrainingStageName';

import BehaviorName from 'components/behaviors/BehaviorName';

import type { TrainingStageTrainingProgressesApp_trainingStage } from '__generated__/TrainingStageTrainingProgressesApp_trainingStage.graphql';
import type { match } from 'react-router-dom';

interface TrainingStageTrainingProgressesAppProps {
    trainingStage: TrainingStageTrainingProgressesApp_trainingStage,
    match: match<{}>,
};

const TrainingStageTrainingProgressesApp: React.FC<TrainingStageTrainingProgressesAppProps> = (props) => {
    return (
        <>
            <h3>Training progress for{' '}
                <TrainingStageName
                    detail={true}
                    trainingStage={props.trainingStage}
                />
                {' of '}
                <BehaviorName
                    behavior={props.trainingStage.behavior}
                />
            </h3>
            <TrainingStageTrainingProgressesList trainingStage={props.trainingStage} match={props.match} />
        </>
    );
}

export default createFragmentContainer(TrainingStageTrainingProgressesApp, {
    trainingStage: graphql`
        fragment TrainingStageTrainingProgressesApp_trainingStage on TrainingStage {
            id
            behavior {
                id
                ...BehaviorName_behavior
            }
            ...TrainingStageTrainingProgressesList_trainingStage
            ...TrainingStageName_trainingStage
        }
    `,
});
