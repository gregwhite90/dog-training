import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import TrainingStageTrainingProgressesList from './TrainingStageTrainingProgressesList';
import TrainingStageName from './TrainingStageName';

import BehaviorName from 'components/behaviors/BehaviorName';

import type { TrainingStageTrainingProgressesApp_trainingStage } from '__generated__/TrainingStageTrainingProgressesApp_trainingStage.graphql';
import type { match } from 'react-router-dom';

import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';

interface TrainingStageTrainingProgressesAppProps extends HeaderLevelProps {
    trainingStage: TrainingStageTrainingProgressesApp_trainingStage,
    match: match<{}>,
};

const TrainingStageTrainingProgressesApp: React.FC<TrainingStageTrainingProgressesAppProps> = ({
    trainingStage,
    match,
    headerLevel = 1,
}) => {
    const HeaderLevel = `h${headerLevel}` as HeaderLevelType;
    return (
        <>
            <HeaderLevel>Training progress for{' '}
                <TrainingStageName
                    detail={true}
                    trainingStage={trainingStage}
                />
                {' of '}
                <BehaviorName
                    behavior={trainingStage.behavior}
                />
            </HeaderLevel>
            <TrainingStageTrainingProgressesList trainingStage={trainingStage} match={match} />
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
