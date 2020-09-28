import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import type { TrainingStageName_trainingStage } from '__generated__/TrainingStageName_trainingStage.graphql';

interface TrainingStageNameProps {
    detail: boolean,
    trainingStage: TrainingStageName_trainingStage,
};

const TrainingStageName: React.FC<TrainingStageNameProps> = (props) => {
    return (
        <span>Stage {props.trainingStage.seq + 1}
            {props.detail &&
                (
                    <span>
                        {' ('}
                        {props.trainingStage.incentive && props.trainingStage.behavior.incentive_method &&
                            (
                                <span>{props.trainingStage.behavior.incentive_method}</span>
                            )
                        }
                        {props.trainingStage.verbal && 'verbal'}
                        {props.trainingStage.hand && 'hand'}
                        {`${props.trainingStage.reward_frequency} rewards`}
                        {')'}
                    </span>
                )
            }
        </span>
    );
}

export default createFragmentContainer(TrainingStageName, {
    trainingStage: graphql`
        fragment TrainingStageName_trainingStage on TrainingStage {
            seq
            incentive
            behavior {
                incentive_method
            }
            verbal
            hand
            reward_frequency
        }
    `,
});
