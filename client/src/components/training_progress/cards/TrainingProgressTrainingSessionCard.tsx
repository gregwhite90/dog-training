import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';

import TrainingStageName from 'components/training_stages/TrainingStageName';
import BehaviorName from 'components/behaviors/BehaviorName';
import TrainingProgressDisplay from '../TrainingProgressDisplay';

import type {
    TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge
} from '__generated__/TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge.graphql';

import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';

interface TrainingProgressTrainingSessionCardProps extends HeaderLevelProps {
    trainingSessionToTrainingStageEdge: TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge,
};

const TrainingProgressTrainingSessionCard: React.FC<TrainingProgressTrainingSessionCardProps> = ({
    trainingSessionToTrainingStageEdge,
    headerLevel = 1,
}) => {
    const edge = trainingSessionToTrainingStageEdge;
    const BehaviorHeaderLevel = `h${headerLevel}` as HeaderLevelType;
    const TrainingStageHeaderLevel = `h${Math.min(headerLevel + 1, 6)}` as HeaderLevelType;
    return (
        <>
            <Row>
                <Link to={`/behaviors/${edge.node!.behavior!.id}`}>
                    <BehaviorHeaderLevel>
                        <BehaviorName
                            behavior={edge.node!.behavior!}
                        />
                    </BehaviorHeaderLevel>
                </Link>
            </Row>
            <Row>
                <Link to={`/stages/${edge.node!.id}`}>
                    <TrainingStageHeaderLevel>
                        <TrainingStageName
                            detail={true}
                            trainingStage={edge.node!}
                        />
                    </TrainingStageHeaderLevel>
                </Link>
            </Row>
            <TrainingProgressDisplay trainingProgress={edge.training_progress} />
        </>
    );
}

export default createFragmentContainer(TrainingProgressTrainingSessionCard, {
    trainingSessionToTrainingStageEdge: graphql`
        fragment TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge on TrainingSessionToTrainingStageEdge {
            training_progress {
                ...TrainingProgressDisplay_trainingProgress
            }
            node {
                id
                ...TrainingStageName_trainingStage
                behavior {
                    id
                    ...BehaviorName_behavior
                }
            }
        }
    `,
});
