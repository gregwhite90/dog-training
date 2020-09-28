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
    const table_display = edge.distance || edge.duration || edge.distractions;
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
                {edge.successes &&
                    (
                        <span>{edge.successes} successes</span>
                    )
                }
                {edge.attempts &&
                    (
                        <span>{edge.successes && "/"}{edge.attempts} attempts</span>
                    )
                }
            </Row>
            <Row>
                {table_display &&
                    (
                        <Table bordered hover>
                            <tbody>
                                {edge.duration &&
                                    (
                                        <tr>
                                            <td>Duration</td>
                                            <td>{edge.duration}</td>
                                        </tr>
                                    )
                                }
                                {edge.distractions &&
                                    (
                                        <tr>
                                            <td>Distractions</td>
                                            <td>{edge.distractions}</td>
                                        </tr>
                                    )
                                }
                                {edge.distance &&
                                    (
                                        <tr>
                                            <td>Distance</td>
                                            <td>{edge.distance}</td>
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
            seq
            successes
            attempts
            distance
            distractions
            duration
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
