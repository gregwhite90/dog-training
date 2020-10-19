import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import TrainingSessionBreadcrumb from './TrainingSessionBreadcrumb';

import TrainingSessionTrainingProgressesApp from './TrainingSessionTrainingProgressesApp';

import type { TrainingSessionTrainingProgressesPageQuery } from '__generated__/TrainingSessionTrainingProgressesPageQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface TrainingSessionTrainingProgressesPageProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    training_session_id: string,
}

// TODO: only allow for the creation once.
const TrainingSessionTrainingProgressesPage: React.FC<TrainingSessionTrainingProgressesPageProps> = ({ relay, match, training_session_id }) => {
    return (
        <QueryRenderer<TrainingSessionTrainingProgressesPageQuery>
            environment={relay.environment}
            query={graphql`
                query TrainingSessionTrainingProgressesPageQuery($id: ID!) {
                    node(id: $id) {
                        ...TrainingSessionTrainingProgressesApp_trainingSession
                        ...TrainingSessionBreadcrumb_trainingSession
                    }
                }
                `}
            variables={{ id: training_session_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <Container fluid>
                            <TrainingSessionBreadcrumb
                                trainingSession={props.node}
                                progresses={true}
                                active={true}
                            />
                            <Container>
                                <TrainingSessionTrainingProgressesApp trainingSession={props.node} match={match} />
                            </Container>
                        </Container>
                    );
                } else if (error) {
                    console.log(error);
                    return <div>{error.message}</div>;
                }
                return (
                    <Spinner animation="border" variant="primary">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                );
            }}
        />
    );
}

export default withAuthenticationRequired(TrainingSessionTrainingProgressesPage, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
