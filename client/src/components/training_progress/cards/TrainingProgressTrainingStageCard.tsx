import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import TrainingSessionName from 'components/training_sessions/TrainingSessionName';

import type {
    TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge
} from '__generated__/TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge.graphql';

interface TrainingProgressTrainingStageCardProps {
    trainingStageToTrainingSessionEdge: TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge,
};

const TrainingProgressTrainingStageCard: React.FC<TrainingProgressTrainingStageCardProps> = (props) => {
    const edge = props.trainingStageToTrainingSessionEdge;
    const table_display = edge.training_progress.distance || edge.training_progress.duration || edge.training_progress.distractions;
    return (
        <>
            <Row>
                {edge.training_progress.successes &&
                    (
                        <span>{edge.training_progress.successes} successes</span>
                    )
                }
                {edge.training_progress.attempts &&
                    (
                        <span>{edge.training_progress.successes && "/"}{edge.training_progress.attempts} attempts</span>
                    )
                }
            </Row>
            <Row>
                {table_display &&
                    (
                        <Table bordered hover>
                            <tbody>
                                {edge.training_progress.duration &&
                                    (
                                        <tr>
                                            <td>Duration</td>
                                            <td>{edge.training_progress.duration}</td>
                                        </tr>
                                    )
                                }
                                {edge.training_progress.distractions &&
                                    (
                                        <tr>
                                            <td>Distractions</td>
                                            <td>{edge.training_progress.distractions}</td>
                                        </tr>
                                    )
                                }
                                {edge.training_progress.distance &&
                                    (
                                        <tr>
                                            <td>Distance</td>
                                            <td>{edge.training_progress.distance}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    )
                }
            </Row>
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

// TODO: import the right other fragments
// TODO: trainingStage name into separate component?
// TODO: create an object for TrainingProgress?
export default createFragmentContainer(TrainingProgressTrainingStageCard, {
    trainingStageToTrainingSessionEdge: graphql`
        fragment TrainingProgressTrainingStageCard_trainingStageToTrainingSessionEdge on TrainingStageToTrainingSessionEdge {
            training_progress {
                seq
                successes
                attempts
                distance
                distractions
                duration
            }
            node {
                id
                ...TrainingSessionName_trainingSession
            }
        }
    `,
});
