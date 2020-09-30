import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import type { TrainingSessionName_trainingSession } from '__generated__/TrainingSessionName_trainingSession.graphql';

interface TrainingSessionNameProps {
    date: boolean,
    time: boolean,
    minutes: boolean,
    trainingSession: TrainingSessionName_trainingSession,
};

// TODO: fix non-null assertion
const TrainingSessionName: React.FC<TrainingSessionNameProps> = (props) => {
    const start_dt = new Date(props.trainingSession.start_timestamp as string);
    return (
        <span>
            Session
            {
                props.date && (
                    <span> on {start_dt.toDateString()}</span>
                )
            }
            {
                props.time && (
                    <span> starting at {start_dt.toTimeString()}</span>
                )
            }
            {
                props.minutes && props.trainingSession.minutes_long &&
                (
                    <span>, for {props.trainingSession.minutes_long} minutes</span>
                )
            }
        </span>
    );
}

export default createFragmentContainer(TrainingSessionName, {
    trainingSession: graphql`
        fragment TrainingSessionName_trainingSession on TrainingSession {
            start_timestamp
            minutes_long
        }
    `,
});
