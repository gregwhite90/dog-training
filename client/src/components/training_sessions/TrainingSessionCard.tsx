import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import ContainerCard from 'components/utils/ContainerCard';

import TrainingSessionName from './TrainingSessionName';

import type { TrainingSessionCard_trainingSession } from '__generated__/TrainingSessionCard_trainingSession.graphql';

import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';

interface TrainingSessionCardProps extends HeaderLevelProps {
    trainingSession: TrainingSessionCard_trainingSession,
};

// TODO: fix non-null assertion
const TrainingSessionCard: React.FC<TrainingSessionCardProps> = ({
    trainingSession,
    headerLevel = 1,
}) => {
    const HeaderLevel = `h${headerLevel}` as HeaderLevelType;
    return (
        <ContainerCard fluid="md">
            <HeaderLevel>Session training {trainingSession.dog!.name}</HeaderLevel>
            <p>
                <TrainingSessionName
                    trainingSession={trainingSession}
                    date={true}
                    time={true}
                    minutes={false}
                />
            </p>
        </ContainerCard>
    );
}

export default createFragmentContainer(TrainingSessionCard, {
    trainingSession: graphql`
        fragment TrainingSessionCard_trainingSession on TrainingSession {
            dog {
                id
                name
            }
            ...TrainingSessionName_trainingSession
        }
    `,
});
