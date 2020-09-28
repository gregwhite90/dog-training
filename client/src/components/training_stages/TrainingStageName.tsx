import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import type { TrainingStageName_trainingStage } from '__generated__/TrainingStageName_trainingStage.graphql';

interface TrainingStageNameProps {
    detail: boolean,
    trainingStage: TrainingStageName_trainingStage,
};

const TrainingStageName: React.FC<TrainingStageNameProps> = (props) => {
    const stage = props.trainingStage;
    const descriptors: Array<string | null> = [
        stage.incentive && stage.behavior.incentive_method ? stage.behavior.incentive_method.toLowerCase() : null,
        stage.verbal ? 'verbal' : null,
        stage.hand ? 'hand' : null,
        `${stage.reward_frequency.toLowerCase()} rewards`,
    ].filter(elem => elem);
    return (
        <span>Stage {stage.seq + 1}
            {props.detail &&
                (
                    <span>
                        {` (${descriptors.join(" / ")})`}
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
