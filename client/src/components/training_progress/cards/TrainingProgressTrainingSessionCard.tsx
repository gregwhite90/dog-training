import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import TrainingStageName from 'components/training_stages/TrainingStageName';
import BehaviorName from 'components/behaviors/BehaviorName';

import type {
    TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge
} from '__generated__/TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge.graphql';

interface TrainingProgressTrainingSessionCardProps {
    trainingSessionToTrainingStageEdge: TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge,
};

const TrainingProgressTrainingSessionCard: React.FC<TrainingProgressTrainingSessionCardProps> = (props) => {
    const edge = props.trainingSessionToTrainingStageEdge;
    const table_display = edge.training_progress.distance || edge.training_progress.duration || edge.training_progress.distractions;
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
        </>
    );
}

// TODO: import the right other fragments
// TODO: trainingStage name into separate component?
// TODO: create an object for TrainingProgress?
export default createFragmentContainer(TrainingProgressTrainingSessionCard, {
    trainingSessionToTrainingStageEdge: graphql`
        fragment TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge on TrainingSessionToTrainingStageEdge {
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
                ...TrainingStageName_trainingStage
                behavior {
                    id
                    ...BehaviorName_behavior
                }
            }
        }
    `,
});
