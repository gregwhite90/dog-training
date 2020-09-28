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
    return (
        <>
            <Row>
                <Link to={`/behaviors/${props.trainingSessionToTrainingStageEdge.node!.behavior!.id}`}>
                    <h3>
                        <BehaviorName
                            behavior={props.trainingSessionToTrainingStageEdge.node!.behavior!}
                        />
                    </h3>
                </Link>
                <Link to={`/stages/${props.trainingSessionToTrainingStageEdge.node!.id}`}>
                    <h4>
                        <TrainingStageName
                            trainingStage={props.trainingSessionToTrainingStageEdge.node!}
                        />
                    </h4>
                </Link>
            </Row>
            <Row>
                {props.trainingSessionToTrainingStageEdge.successes &&
                    (
                        <span>{props.trainingSessionToTrainingStageEdge.successes} successes</span>
                    )
                }
                {props.trainingSessionToTrainingStageEdge.attempts &&
                    (
                        <span>{props.trainingSessionToTrainingStageEdge.successes && " on "}{props.trainingSessionToTrainingStageEdge.attempts} attempts</span>
                    )
                }
            </Row>
            <Row>
                {props.trainingSessionToTrainingStageEdge.duration ||
                    props.trainingSessionToTrainingStageEdge.distractions ||
                    props.trainingSessionToTrainingStageEdge.distance &&
                    (
                        <Table bordered hover>
                            <tbody>
                                {props.trainingSessionToTrainingStageEdge.duration &&
                                    (
                                        <tr>
                                            <td>Duration</td>
                                            <td>{props.trainingSessionToTrainingStageEdge.duration}</td>
                                        </tr>
                                    )
                                }
                                {props.trainingSessionToTrainingStageEdge.distractions &&
                                    (
                                        <tr>
                                            <td>Distractions</td>
                                            <td>{props.trainingSessionToTrainingStageEdge.distractions}</td>
                                        </tr>
                                    )
                                }
                                {props.trainingSessionToTrainingStageEdge.distance &&
                                    (
                                        <tr>
                                            <td>Distance</td>
                                            <td>{props.trainingSessionToTrainingStageEdge.distance}</td>
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
