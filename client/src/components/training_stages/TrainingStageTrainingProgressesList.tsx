import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import ContainerCard from 'components/utils/ContainerCard';
import Row from 'react-bootstrap/Row';

import TrainingProgressTrainingStageCard from 'components/training_progress/cards/TrainingProgressTrainingStageCard';
import TrainingStageName from 'components/training_stages/TrainingStageName';
import BehaviorName from 'components/behaviors/BehaviorName';

import type { match } from 'react-router-dom';
import type { TrainingStageTrainingProgressesList_trainingStage } from '__generated__/TrainingStageTrainingProgressesList_trainingStage.graphql';
import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';

// TODO: import "match params" (empty object because hardcoded route) from parent component?
interface TrainingStageTrainingProgressesListProps extends HeaderLevelProps {
    trainingStage: TrainingStageTrainingProgressesList_trainingStage,
    match: match<{}>,
}

const TrainingStageTrainingProgressesList: React.FC<TrainingStageTrainingProgressesListProps> = ({
    trainingStage,
    match,
    headerLevel = 1,
}) => {
    const BehaviorHeaderLevel = `h${headerLevel}` as HeaderLevelType;
    const StageHeaderLevel = `h${Math.min(headerLevel + 1, 6)}` as HeaderLevelType;
    const edges =
        trainingStage
            && trainingStage.trainingSessions
            && trainingStage.trainingSessions.edges
            ? trainingStage.trainingSessions.edges.filter(Boolean)
            : [];
    return (
        <>
            {edges.map(edge => {
                return (
                    <ContainerCard key={edge!.training_progress.seq} fluid="md">
                        <Row>
                            <BehaviorHeaderLevel>
                                <Link to={`/behaviors/${trainingStage.behavior.id}`}>
                                    <BehaviorName behavior={trainingStage.behavior} />
                                </Link>
                            </BehaviorHeaderLevel>
                        </Row>
                        <Row>
                            <StageHeaderLevel>
                                <Link to={`/stages/${trainingStage.id}`}>
                                    <TrainingStageName
                                        detail={false}
                                        trainingStage={trainingStage}
                                    />
                                </Link>
                            </StageHeaderLevel>
                        </Row>
                        <TrainingProgressTrainingStageCard
                            trainingStageToTrainingSessionEdge={edge!}
                        />
                    </ContainerCard>
                );
            })}
        </>
    );
}

export default createFragmentContainer(TrainingStageTrainingProgressesList, {
    trainingStage: graphql`
        fragment TrainingStageTrainingProgressesList_trainingStage on TrainingStage {
            id
            ...TrainingStageName_trainingStage
            behavior {
                id
                ...BehaviorName_behavior
            }
            trainingSessions(
                first: 2147483647 # max GraphQLInt
            ) @connection(key: "TrainingStageTrainingProgressesList_trainingSessions") {
                edges {
                    training_progress {
                        seq
                    }
                    ...TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge
                }
            }
        }
    `,
});
