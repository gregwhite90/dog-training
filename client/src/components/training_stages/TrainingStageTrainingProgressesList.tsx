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

// TODO: import "match params" (empty object because hardcoded route) from parent component?
interface TrainingStageTrainingProgressesListProps {
    trainingStage: TrainingStageTrainingProgressesList_trainingStage,
    match: match<{}>,
}

const TrainingStageTrainingProgressesList: React.FC<TrainingStageTrainingProgressesListProps> = (props) => {
    const edges =
        props
            && props.trainingStage
            && props.trainingStage.trainingSessions
            && props.trainingStage.trainingSessions.edges
            ? props.trainingStage.trainingSessions.edges.filter(Boolean)
            : [];
    return (
        <>
            {edges.map(edge => {
                return (
                    <ContainerCard key={edge!.training_progress.seq} fluid="md">
                        <Row>
                            <h3>
                                <Link to={`/behaviors/${props.trainingStage.behavior.id}`}>
                                    <BehaviorName behavior={props.trainingStage.behavior} />
                                </Link>
                            </h3>
                        </Row>
                        <Row>
                            <h4>
                                <Link to={`/stages/${props.trainingStage.id}`}>
                                    <TrainingStageName
                                        detail={false}
                                        trainingStage={props.trainingStage}
                                    />
                                </Link>
                            </h4>
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
