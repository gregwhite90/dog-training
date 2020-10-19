import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import DogBreadcrumb from './DogBreadcrumb';
import InviteUserByEmailForm from './InviteUserByEmailForm';

import type {
    DogPendingInvitationCreatorQuery
} from '__generated__/DogPendingInvitationCreatorQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface DogPendingInvitationCreatorProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    dog_id: string,
}

const DogPendingInvitationCreator: React.FC<DogPendingInvitationCreatorProps> = ({ relay, dog_id }) => {
    return (
        <QueryRenderer<DogPendingInvitationCreatorQuery>
            environment={relay.environment}
            query={graphql`
                query DogPendingInvitationCreatorQuery($id: ID!) {
                    node(id: $id) {
                        ...DogBreadcrumb_dog
                        ...InviteUserByEmailForm_dog
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
                                active={true}
                            />
                            <Container>
                                <InviteUserByEmailForm
                                    dog={props.node}
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

export default withAuthenticationRequired(DogPendingInvitationCreator, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
