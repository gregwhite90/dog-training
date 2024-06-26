import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import BehaviorBreadcrumb from './BehaviorBreadcrumb';

import BehaviorTrainingProgressesApp from './BehaviorTrainingProgressesApp';

import type { BehaviorTrainingProgressesPageQuery } from '__generated__/BehaviorTrainingProgressesPageQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface BehaviorTrainingProgressesPageProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    behavior_id: string,
}

// TODO: only allow for the creation once.
const BehaviorTrainingProgressesPage: React.FC<BehaviorTrainingProgressesPageProps> = ({ relay, match, behavior_id }) => {
    return (
        <QueryRenderer<BehaviorTrainingProgressesPageQuery>
            environment={relay.environment}
            query={graphql`
                query BehaviorTrainingProgressesPageQuery($id: ID!) {
                    node(id: $id) {
                        ...BehaviorTrainingProgressesApp_behavior
                        ...BehaviorBreadcrumb_behavior
                    }
                }
                `}
            variables={{ id: behavior_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <Container fluid>
                            <BehaviorBreadcrumb
                                behavior={props.node}
                                leaf="progress"
                                active={true}
                            />
                            <Container>
                                <BehaviorTrainingProgressesApp behavior={props.node} match={match} />
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

export default withAuthenticationRequired(BehaviorTrainingProgressesPage, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
