import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import ContainerCard from 'components/utils/ContainerCard';
import Table from 'react-bootstrap/Table';

import TrainingStageName from 'components/training_stages/TrainingStageName';

import type { TrainingStageCard_trainingStage } from '__generated__/TrainingStageCard_trainingStage.graphql';

interface TrainingStageCardProps {
    trainingStage: TrainingStageCard_trainingStage,
};

// TODO: clean up the non-null assertions
const TrainingStageCard: React.FC<TrainingStageCardProps> = (props) => {
    return (
        <ContainerCard fluid="md">
            <h3><TrainingStageName detail={false} trainingStage={props.trainingStage} /></h3>
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
        </ContainerCard>
    );
}

export default createFragmentContainer(TrainingStageCard, {
    trainingStage: graphql`
        fragment TrainingStageCard_trainingStage on TrainingStage {
            ...TrainingStageName_trainingStage
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
