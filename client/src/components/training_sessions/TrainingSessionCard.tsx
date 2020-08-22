import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Container from 'react-bootstrap/Container';

import type { TrainingSessionCard_trainingSession } from '__generated__/TrainingSessionCard_trainingSession.graphql';

interface TrainingSessionCardProps {
    trainingSession: TrainingSessionCard_trainingSession,
};

// TODO: fix non-null assertion
const TrainingSessionCard: React.FC<TrainingSessionCardProps> = (props) => {
    const start_dt = new Date(props.trainingSession.start_timestamp as string);
    return (
        <Container fluid="md" className="p-3 mb-3 border rounded">
            <h3>Session training {props.trainingSession.dog!.name} on {start_dt.toDateString()}</h3>
            <p>Started at {start_dt.toTimeString()}
                {
                    props.trainingSession.minutes_long &&
                    (
                        <span>, for {props.trainingSession.minutes_long} minutes</span>
                    )
                }
            </p>
        </Container>
    );
}

export default createFragmentContainer(TrainingSessionCard, {
    trainingSession: graphql`
        fragment TrainingSessionCard_trainingSession on TrainingSession {
            start_timestamp
            minutes_long
            dog {
                id
                name
            }
        }
    `,
});
