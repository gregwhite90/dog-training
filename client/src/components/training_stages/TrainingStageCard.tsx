import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import type { TrainingStageCard_trainingStage } from '__generated__/TrainingStageCard_trainingStage.graphql';

interface TrainingStageCardProps {
    trainingStage: TrainingStageCard_trainingStage,
};

// TODO: clean up the non-null assertions
const TrainingStageCard: React.FC<TrainingStageCardProps> = (props) => {
    return (
        <Container fluid="md" className="p-3 mb-3 border rounded">
            <h3>Stage {props.trainingStage.seq + 1}</h3>
            <Table bordered hover>
                <tbody>
                    <tr>
                        <td>Prompts</td>
                        <td>
                            <ul>
                                {props.trainingStage.incentive &&
                                    (
                                        <li key="incentive">
                                            {props.trainingStage.behavior!.incentive_method!}
                                        </li>
                                    )
                                }
                                {props.trainingStage.verbal &&
                                    (
                                        <li key="verbal">
                                            {props.trainingStage.behavior!.verbal_command
                                                ? `${props.trainingStage.behavior!.verbal_command} verbal command`
                                                : "Verbal command"}
                                        </li>
                                    )
                                }
                                {props.trainingStage.hand &&
                                    (
                                        <li key="hand">
                                            Hand signal
                                        </li>
                                    )
                                }
                            </ul>
                        </td>
                    </tr>
                    {props.trainingStage.reward_frequency &&
                        (
                            <tr>
                                <td>Reward frequency</td>
                                <td>{props.trainingStage.reward_frequency}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default createFragmentContainer(TrainingStageCard, {
    trainingStage: graphql`
        fragment TrainingStageCard_trainingStage on TrainingStage {
            seq
            incentive
            verbal
            hand
            reward_frequency
            behavior {
                incentive_method
                verbal_command
            }
        }
    `,
});
