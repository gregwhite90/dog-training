import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import TrainingSessionTrainingProgressesList from './TrainingSessionTrainingProgressesList';
import TrainingSessionName from './TrainingSessionName';

import type { TrainingSessionTrainingProgressesApp_trainingSession } from '__generated__/TrainingSessionTrainingProgressesApp_trainingSession.graphql';
import type { match } from 'react-router-dom';

interface TrainingSessionTrainingProgressesAppProps {
    trainingSession: TrainingSessionTrainingProgressesApp_trainingSession,
    match: match<{}>,
};

const TrainingSessionTrainingProgressesApp: React.FC<TrainingSessionTrainingProgressesAppProps> = (props) => {
    return (
        <>
            <h3>Training progress for {props.trainingSession.dog!.name} in <TrainingSessionName
                trainingSession={props.trainingSession}
                date={true}
                time={true}
                minutes={true}
            />
            </h3>
            <TrainingSessionTrainingProgressesList trainingSession={props.trainingSession} match={props.match} />
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
