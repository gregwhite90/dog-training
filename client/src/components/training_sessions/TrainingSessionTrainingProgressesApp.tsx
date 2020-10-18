import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import TrainingSessionTrainingProgressesList from './TrainingSessionTrainingProgressesList';
import TrainingSessionName from './TrainingSessionName';

import type { TrainingSessionTrainingProgressesApp_trainingSession } from '__generated__/TrainingSessionTrainingProgressesApp_trainingSession.graphql';
import type { match } from 'react-router-dom';
import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';

interface TrainingSessionTrainingProgressesAppProps extends HeaderLevelProps {
    trainingSession: TrainingSessionTrainingProgressesApp_trainingSession,
    match: match<{}>,
};

const TrainingSessionTrainingProgressesApp: React.FC<TrainingSessionTrainingProgressesAppProps> = ({
    trainingSession,
    match,
    headerLevel = 1,
}) => {
    const HeaderLevel = `h${headerLevel}` as HeaderLevelType;
    return (
        <>
            <HeaderLevel>Training progress for {trainingSession.dog!.name} in <TrainingSessionName
                trainingSession={trainingSession}
                date={true}
                time={true}
                minutes={true}
            />
            </HeaderLevel>
            <TrainingSessionTrainingProgressesList trainingSession={trainingSession} match={match} />
        </>
    );
}

export default createFragmentContainer(TrainingSessionTrainingProgressesApp, {
    trainingSession: graphql`
        fragment TrainingSessionTrainingProgressesApp_trainingSession on TrainingSession {
            id
            dog {
                id
                name
            }
            ...TrainingSessionTrainingProgressesList_trainingSession
            ...TrainingSessionName_trainingSession
        }
    `,
});
