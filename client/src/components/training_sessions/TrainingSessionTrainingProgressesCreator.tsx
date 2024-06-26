import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import TrainingSessionBreadcrumb from './TrainingSessionBreadcrumb';

import CreateTrainingProgressesForm from './CreateTrainingProgressesForm';

import type {
    TrainingSessionTrainingProgressesCreatorQuery
} from '__generated__/TrainingSessionTrainingProgressesCreatorQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface TrainingSessionTrainingProgressesCreatorProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    training_session_id: string,
}

const TrainingSessionTrainingProgressesCreator: React.FC<TrainingSessionTrainingProgressesCreatorProps> = ({ relay, training_session_id }) => {
    return (
        <QueryRenderer<TrainingSessionTrainingProgressesCreatorQuery>
            environment={relay.environment}
            query={graphql`
                query TrainingSessionTrainingProgressesCreatorQuery($id: ID!) {
                    node(id: $id) {
                        ...TrainingSessionBreadcrumb_trainingSession
                        ...CreateTrainingProgressesForm_trainingSession
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
                                active={false}
                                progresses={true}
                            />
                            <Container>
                                <CreateTrainingProgressesForm
                                    trainingSession={props.node}
                                    relay_environment={relay.environment} />
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

export default withAuthenticationRequired(TrainingSessionTrainingProgressesCreator, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
