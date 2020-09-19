import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Container from 'react-bootstrap/Container';

import TrainingSessionName from './TrainingSessionName';

import type { TrainingSessionCard_trainingSession } from '__generated__/TrainingSessionCard_trainingSession.graphql';

interface TrainingSessionCardProps {
    trainingSession: TrainingSessionCard_trainingSession,
};

// TODO: fix non-null assertion
const TrainingSessionCard: React.FC<TrainingSessionCardProps> = (props) => {
    return (
        <Container fluid="md" className="p-3 mb-3 border rounded">
            <h3>Session training {props.trainingSession.dog!.name}</h3>
            <p>
                <TrainingSessionName
                    trainingSession={props.trainingSession}
                    date={true}
                    time={true}
                    minutes={true}
                />
            </p>
        </Container>
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
