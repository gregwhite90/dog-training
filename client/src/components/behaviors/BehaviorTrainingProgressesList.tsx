import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import ContainerCard from 'components/utils/ContainerCard';
import Row from 'react-bootstrap/Row';

import TrainingProgressTrainingStageCard from 'components/training_progress/cards/TrainingProgressTrainingStageCard';
import TrainingStageName from 'components/training_stages/TrainingStageName';
import BehaviorName from 'components/behaviors/BehaviorName';

import type { match } from 'react-router-dom';
import type { BehaviorTrainingProgressesList_behavior } from '__generated__/BehaviorTrainingProgressesList_behavior.graphql';

// TODO: import "match params" (empty object because hardcoded route) from parent component?
interface BehaviorTrainingProgressesListProps {
    behavior: BehaviorTrainingProgressesList_behavior,
    match: match<{}>,
}

const BehaviorTrainingProgressesList: React.FC<BehaviorTrainingProgressesListProps> = (props) => {
    const stageEdges =
        props
            && props.behavior
            && props.behavior.trainingStages
            && props.behavior.trainingStages.edges
            ? props.behavior.trainingStages.edges.filter(Boolean)
            : [];
    return (
        <>
            {stageEdges.map(stageEdge => {
                return (
                    <ContainerCard key={stageEdge!.node!.id} fluid="md">
                        <h4>
                            Training progress for <TrainingStageName
                                detail={true}
                                trainingStage={stageEdge!.node!}
                            />
                        </h4>
                        {stageEdge!.node!.trainingSessions!.edges!.map(edge => {
                            return (
                                <ContainerCard
                                    key={`${stageEdge!.node!.id}-${edge!.training_progress.seq}`}
                                    fluid="md" >
                                    <Row>
                                        <h3>
                                            <Link to={`/behaviors/${props.behavior.id}`}>
                                                <BehaviorName behavior={props.behavior} />
                                            </Link>
                                        </h3>
                                    </Row>
                                    <Row>
                                        <h4>
                                            <Link to={`/stages/${stageEdge!.node!.id}`}>
                                                <TrainingStageName
                                                    detail={true}
                                                    trainingStage={stageEdge!.node!}
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
                    </ContainerCard>
                );
            })}
        </>
    );
}

export default createFragmentContainer(BehaviorTrainingProgressesList, {
    behavior: graphql`
        fragment BehaviorTrainingProgressesList_behavior on Behavior {
            id
            ...BehaviorName_behavior
            trainingStages(
                first: 2147483647 # max GraphQLInt
            ) {
                edges {
                    node {
                        id
                        ...TrainingStageName_trainingStage
                        trainingSessions(
                            first: 2147483647 # max GraphQLInt
                        ) {
                            edges {
                                training_progress {
                                    seq
                                }
                                ...TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge
                            }
                        }
                    }
                }
            }
        }
    `,
});
