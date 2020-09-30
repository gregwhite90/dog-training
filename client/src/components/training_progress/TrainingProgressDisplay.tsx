import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import type {
    TrainingProgressDisplay_trainingProgress
} from '__generated__/TrainingProgressDisplay_trainingProgress.graphql';

interface TrainingProgressDisplayProps {
    trainingProgress: TrainingProgressDisplay_trainingProgress,
};

const TrainingProgressDisplay: React.FC<TrainingProgressDisplayProps> = (props) => {
    const table_display = props.trainingProgress.distance || props.trainingProgress.duration || props.trainingProgress.distractions;
    return (
        <>
            <Row>
                {props.trainingProgress.successes &&
                    (
                        <span>{props.trainingProgress.successes} successes</span>
                    )
                }
                {props.trainingProgress.attempts &&
                    (
                        <span>{props.trainingProgress.successes && "/"}{props.trainingProgress.attempts} attempts</span>
                    )
                }
            </Row>
            <Row>
                {table_display &&
                    (
                        <Table bordered hover>
                            <tbody>
                                {props.trainingProgress.duration &&
                                    (
                                        <tr>
                                            <td>Duration</td>
                                            <td>{props.trainingProgress.duration}</td>
                                        </tr>
                                    )
                                }
                                {props.trainingProgress.distractions &&
                                    (
                                        <tr>
                                            <td>Distractions</td>
                                            <td>{props.trainingProgress.distractions}</td>
                                        </tr>
                                    )
                                }
                                {props.trainingProgress.distance &&
                                    (
                                        <tr>
                                            <td>Distance</td>
                                            <td>{props.trainingProgress.distance}</td>
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

export default createFragmentContainer(TrainingProgressDisplay, {
    trainingProgress: graphql`
        fragment TrainingProgressDisplay_trainingProgress on TrainingProgress {
            seq
            successes
            attempts
            distance
            distractions
            duration
        }
    `,
});
