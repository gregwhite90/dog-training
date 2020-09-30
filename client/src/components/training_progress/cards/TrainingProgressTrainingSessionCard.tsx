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

interface TrainingProgressTrainingSessionCardProps {
    trainingSessionToTrainingStageEdge: TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge,
};

const TrainingProgressTrainingSessionCard: React.FC<TrainingProgressTrainingSessionCardProps> = (props) => {
    const edge = props.trainingSessionToTrainingStageEdge;
    return (
        <>
            <Row>
                <Link to={`/behaviors/${edge.node!.behavior!.id}`}>
                    <h3>
                        <BehaviorName
                            behavior={edge.node!.behavior!}
                        />
                    </h3>
                </Link>
            </Row>
            <Row>
                <Link to={`/stages/${edge.node!.id}`}>
                    <h4>
                        <TrainingStageName
                            detail={true}
                            trainingStage={edge.node!}
                        />
                    </h4>
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
