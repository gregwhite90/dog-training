import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import BehaviorBreadcrumb from './BehaviorBreadcrumb';

import CreateTrainingStagesForm from './CreateTrainingStagesForm';

import type {
    BehaviorTrainingStagesCreatorQuery
} from '__generated__/BehaviorTrainingStagesCreatorQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface BehaviorTrainingStagesCreatorProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    behavior_id: string,
}

const BehaviorTrainingStagesCreator: React.FC<BehaviorTrainingStagesCreatorProps> = ({ relay, behavior_id }) => {
    return (
        <QueryRenderer<BehaviorTrainingStagesCreatorQuery>
            environment={relay.environment}
            query={graphql`
                query BehaviorTrainingStagesCreatorQuery($id: ID!) {
                    node(id: $id) {
                        ...BehaviorBreadcrumb_behavior
                        ...CreateTrainingStagesForm_behavior
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
                                active={false}
                                leaf="stages"
                            />
                            <Container>
                                <CreateTrainingStagesForm
                                    behavior={props.node}
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

export default withAuthenticationRequired(BehaviorTrainingStagesCreator, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
