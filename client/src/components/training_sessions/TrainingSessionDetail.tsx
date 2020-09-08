import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import TrainingSessionCard from './TrainingSessionCard';
import TrainingSessionBreadcrumb from './TrainingSessionBreadcrumb';
import TrainingSessionTrainingProgressesList from './TrainingSessionTrainingProgressesList';

// TODO: authorization check

// TODO: fix any types
// TODO: create the behavior detail query
import type { TrainingSessionDetailQuery } from '__generated__/TrainingSessionDetailQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface TrainingSessionDetailProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    training_session_id: string,
}

const TrainingSessionDetail: React.FC<TrainingSessionDetailProps> = ({ relay, match, training_session_id }) => {
    return (
        <QueryRenderer<TrainingSessionDetailQuery>
            environment={relay.environment}
            query={graphql`
                query TrainingSessionDetailQuery($id: ID!) {
                    node(id: $id) {
                        ...TrainingSessionCard_trainingSession
                        ...TrainingSessionBreadcrumb_trainingSession
                        ...TrainingSessionTrainingProgressesList_trainingSession
                    }
                }
                `}
            variables={{ id: training_session_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <>
                            <TrainingSessionBreadcrumb
                                trainingSession={props.node}
                                active={true}
                            />
                            <Container>
                                <TrainingSessionCard trainingSession={props.node} />
                            </Container>
                            <Container>
                                <TrainingSessionTrainingProgressesList
                                    trainingSession={props.node}
                                />
                            </Container>
                        </>
                    );
                } else if (error) {
                    console.log(error);
                    return <div>{error.message}</div>;
                }

                return <div>Loading...</div>;
            }}
        />
    );
}

export default withAuthenticationRequired(TrainingSessionDetail, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
