import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';

import TrainingSessionName from 'components/training_sessions/TrainingSessionName';
import TrainingProgressDisplay from '../TrainingProgressDisplay';

import type {
    TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge
} from '__generated__/TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge.graphql';

interface TrainingProgressTrainingStageCardProps {
    trainingStageToTrainingSessionEdge: TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge,
};

const TrainingProgressTrainingStageCard: React.FC<TrainingProgressTrainingStageCardProps> = (props) => {
    const edge = props.trainingStageToTrainingSessionEdge;
    return (
        <>
            <TrainingProgressDisplay trainingProgress={edge.training_progress} />
            <Row>
                <Link to={`/sessions/${edge.node!.id}`}>
                    <TrainingSessionName
                        date={true}
                        time={true}
                        minutes={false}
                        trainingSession={edge.node!}
                    />
                </Link>
            </Row>
        </>
    );
}

export default createFragmentContainer(TrainingProgressTrainingStageCard, {
    trainingStageToTrainingSessionEdge: graphql`
        fragment TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge on TrainingStageToTrainingSessionEdge {
            training_progress {
                ...TrainingProgressDisplay_trainingProgress
            }
            node {
                id
                ...TrainingSessionName_trainingSession
            }
        }
    `,
});
