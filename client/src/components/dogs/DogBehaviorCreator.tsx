import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import DogBreadcrumb from './DogBreadcrumb';

import CreateBehaviorForm from './CreateBehaviorForm';

// TODO: authorization check

// TODO: fix any types
import type { DogBehaviorCreatorQuery } from '__generated__/DogBehaviorCreatorQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface DogBehaviorCreatorProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    dog_id: string,
}

const DogBehaviorCreator: React.FC<DogBehaviorCreatorProps> = ({ relay, dog_id }) => {
    return (
        <QueryRenderer<DogBehaviorCreatorQuery>
            environment={relay.environment}
            query={graphql`
                query DogBehaviorCreatorQuery($id: ID!) {
                    node(id: $id) {
                        ...CreateBehaviorForm_dog
                        ...DogBreadcrumb_dog
                    }
                }
                `}
            variables={{ id: dog_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <Container fluid>
                            <DogBreadcrumb
                                dog={props.node}
                                final="behaviors"
                                active={false}
                            />
                            <Container>
                                <CreateBehaviorForm dog={props.node} relay_environment={relay.environment} />
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

export default withAuthenticationRequired(DogBehaviorCreator, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
