import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';

// TODO: create behavior card
import BehaviorCard from './BehaviorCard';
import BehaviorBreadcrumb from './BehaviorBreadcrumb';

// TODO: authorization check

// TODO: fix any types
// TODO: create the behavior detail query
import type { BehaviorDetailQuery } from '__generated__/BehaviorDetailQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { IEnvironment } from 'relay-runtime';

interface MatchParams { }

interface BehaviorDetailProps extends RouteComponentProps<MatchParams> {
    relay: {
        environment: IEnvironment,
    },
    behavior_id: string,
}

const BehaviorDetail: React.FC<BehaviorDetailProps> = ({ relay, behavior_id }) => {
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
                        <>
                            <BehaviorBreadcrumb behavior={props.node} active={true} />
                            <Container>
                                <BehaviorCard behavior={props.node} />
                            </Container>
                        </>
                    );
                } else if (error) {
                    console.log(error);
                    return <div>error.message</div>;
                }

                return <div>Loading...</div>;
            }}
        />
    );
}

export default withAuthenticationRequired(BehaviorDetail, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
