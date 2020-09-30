import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import BehaviorBreadcrumb from './BehaviorBreadcrumb';

import BehaviorTrainingStagesApp from './BehaviorTrainingStagesApp';

import type { BehaviorTrainingStagesPageQuery } from '__generated__/BehaviorTrainingStagesPageQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface BehaviorTrainingStagesPageProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    behavior_id: string,
}

// TODO: only allow for the creation once.
const BehaviorTrainingStagesPage: React.FC<BehaviorTrainingStagesPageProps> = ({ relay, match, behavior_id }) => {
    return (
        <QueryRenderer<BehaviorTrainingStagesPageQuery>
            environment={relay.environment}
            query={graphql`
                query BehaviorTrainingStagesPageQuery($id: ID!) {
                    node(id: $id) {
                        ...BehaviorTrainingStagesApp_behavior
                        ...BehaviorBreadcrumb_behavior
                    }
                }
                `}
            variables={{ id: behavior_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <>
                            <BehaviorBreadcrumb
                                behavior={props.node}
                                leaf="stages"
                                active={true}
                            />
                            <Container>
                                <BehaviorTrainingStagesApp behavior={props.node} match={match} />
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

export default withAuthenticationRequired(BehaviorTrainingStagesPage, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
