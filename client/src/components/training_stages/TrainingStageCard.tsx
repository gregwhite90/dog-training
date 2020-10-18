import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import ContainerCard from 'components/utils/ContainerCard';
import Table from 'react-bootstrap/Table';

import TrainingStageName from 'components/training_stages/TrainingStageName';

import type { TrainingStageCard_trainingStage } from '__generated__/TrainingStageCard_trainingStage.graphql';
import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';

interface TrainingStageCardProps extends HeaderLevelProps {
    trainingStage: TrainingStageCard_trainingStage,
};

// TODO: clean up the non-null assertions
const TrainingStageCard: React.FC<TrainingStageCardProps> = ({
    trainingStage,
    headerLevel = 1,
}) => {
    const HeaderLevel = `h${headerLevel}` as HeaderLevelType;
    return (
        <ContainerCard fluid="md">
            <HeaderLevel>
                <TrainingStageName detail={false} trainingStage={trainingStage} />
            </HeaderLevel>
            <Table bordered hover>
                <tbody>
                    <tr>
                        <td>Prompts</td>
                        <td>
                            <ul>
                                {trainingStage.incentive &&
                                    (
                                        <li key="incentive">
                                            {trainingStage.behavior!.incentive_method!}
                                        </li>
                                    )
                                }
                                {trainingStage.verbal &&
                                    (
                                        <li key="verbal">
                                            {trainingStage.behavior!.verbal_command
                                                ? `${trainingStage.behavior!.verbal_command} verbal command`
                                                : "Verbal command"}
                                        </li>
                                    )
                                }
                                {trainingStage.hand &&
                                    (
                                        <li key="hand">
                                            Hand signal
                                        </li>
                                    )
                                }
                            </ul>
                        </td>
                    </tr>
                    {trainingStage.reward_frequency &&
                        (
                            <tr>
                                <td>Reward frequency</td>
                                <td>{trainingStage.reward_frequency}</td>
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
