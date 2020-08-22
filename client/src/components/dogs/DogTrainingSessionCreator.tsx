import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';

import DogBreadcrumb from './DogBreadcrumb';

import CreateTrainingSessionForm from './CreateTrainingSessionForm';

// TODO: authorization check

// TODO: fix any types
import type { DogTrainingSessionCreatorQuery } from '__generated__/DogTrainingSessionCreatorQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface DogTrainingSessionCreatorProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    dog_id: string,
}

const DogTrainingSessionCreator: React.FC<DogTrainingSessionCreatorProps> = ({ relay, dog_id }) => {
    return (
        <QueryRenderer<DogTrainingSessionCreatorQuery>
            environment={relay.environment}
            query={graphql`
                query DogTrainingSessionCreatorQuery($id: ID!) {
                    node(id: $id) {
                        ...CreateTrainingSessionForm_dog
                        ...DogBreadcrumb_dog
                    }
                }
                `}
            variables={{ id: dog_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <>
                            <DogBreadcrumb
                                dog={props.node}
                                final="sessions"
                                active={false}
                            />
                            <Container>
                                <CreateTrainingSessionForm dog={props.node} relay_environment={relay.environment} />
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

export default withAuthenticationRequired(DogTrainingSessionCreator, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
