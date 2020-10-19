import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

import BehaviorCard from './BehaviorCard';
import BehaviorBreadcrumb from './BehaviorBreadcrumb';

// TODO: authorization check

// TODO: fix any types
import type { BehaviorDetailQuery } from '__generated__/BehaviorDetailQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface BehaviorDetailProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    behavior_id: string,
}

const BehaviorDetail: React.FC<BehaviorDetailProps> = ({ relay, match, behavior_id }) => {
    return (
        <QueryRenderer<BehaviorDetailQuery>
            environment={relay.environment}
            query={graphql`
                query BehaviorDetailQuery($id: ID!) {
                    node(id: $id) {
                        ...BehaviorCard_behavior
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
                                active={true}
                            />
                            <Container>
                                <BehaviorCard behavior={props.node} />
                                <Link to={`${match.url}/stages`}>
                                    <Button variant="primary">
                                        View training stages
                                    </Button>
                                </Link>
                                <Link to={`${match.url}/progress`}>
                                    <Button variant="primary">
                                        View training progress
                                    </Button>
                                </Link>
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

export default withAuthenticationRequired(BehaviorDetail, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
