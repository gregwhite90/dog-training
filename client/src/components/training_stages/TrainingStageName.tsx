import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import type { TrainingStageName_trainingStage } from '__generated__/TrainingStageName_trainingStage.graphql';

interface TrainingStageNameProps {
    trainingStage: TrainingStageName_trainingStage,
};

const TrainingStageName: React.FC<TrainingStageNameProps> = (props) => {
    return <span>Stage {props.trainingStage.seq + 1}</span>;
}

export default createFragmentContainer(TrainingStageName, {
    trainingStage: graphql`
        fragment TrainingStageName_trainingStage on TrainingStage {
            seq
        }
    `,
});
