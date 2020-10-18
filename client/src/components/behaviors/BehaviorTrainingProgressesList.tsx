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

import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';

// TODO: import "match params" (empty object because hardcoded route) from parent component?
interface BehaviorTrainingProgressesListProps extends HeaderLevelProps {
    behavior: BehaviorTrainingProgressesList_behavior,
    match: match<{}>,
}

const BehaviorTrainingProgressesList: React.FC<BehaviorTrainingProgressesListProps> = ({
    behavior,
    match,
    headerLevel = 1,
}) => {
    const TrainingStageHeaderLevel = `h${headerLevel}` as HeaderLevelType;
    const TrainingSessionHeaderLevel = `h${Math.min(headerLevel + 1, 6)}` as HeaderLevelType;
    const TrainingSessionStageHeaderLevel = `h${Math.min(headerLevel + 2, 6)}` as HeaderLevelType;
    const stageEdges =
        behavior
            && behavior.trainingStages
            && behavior.trainingStages.edges
            ? behavior.trainingStages.edges.filter(Boolean)
            : [];
    return (
        <>
            {stageEdges.map(stageEdge => {
                return (
                    <ContainerCard key={stageEdge!.node!.id} fluid="md">
                        <TrainingStageHeaderLevel>
                            Training progress for <TrainingStageName
                                detail={true}
                                trainingStage={stageEdge!.node!}
                            />
                        </TrainingStageHeaderLevel>
                        {stageEdge!.node!.trainingSessions!.edges!.map(edge => {
                            return (
                                <ContainerCard
                                    key={`${stageEdge!.node!.id}-${edge!.training_progress.seq}`}
                                    fluid="md" >
                                    <Row>
                                        <TrainingSessionHeaderLevel>
                                            <Link to={`/behaviors/${behavior.id}`}>
                                                <BehaviorName behavior={behavior} />
                                            </Link>
                                        </TrainingSessionHeaderLevel>
                                    </Row>
                                    <Row>
                                        <TrainingSessionStageHeaderLevel>
                                            <Link to={`/stages/${stageEdge!.node!.id}`}>
                                                <TrainingStageName
                                                    detail={true}
                                                    trainingStage={stageEdge!.node!}
                                                />
                                            </Link>
                                        </TrainingSessionStageHeaderLevel>
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
