import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';

import CreateBehaviorForm from './CreateBehaviorForm';

// TODO: authorization check

// TODO: fix any types
import type { DogBehaviorCreatorQuery } from '__generated__/DogBehaviorCreatorQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { IEnvironment } from 'relay-runtime';

interface MatchParams {
    id: string,
}

interface DogBehaviorCreatorProps extends RouteComponentProps<MatchParams> {
    relay: {
        environment: IEnvironment,
    },
}

const DogBehaviorCreator: React.FC<DogBehaviorCreatorProps> = ({ relay, match }) => {
    return (
        <QueryRenderer<DogBehaviorCreatorQuery>
            environment={relay.environment}
            query={graphql`
                query DogBehaviorCreatorQuery($id: ID!) {
                    node(id: $id) {
                        ...CreateBehaviorForm_dog
                    }
                }
                `}
            variables={{ id: match.params.id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <Container>
                            <CreateBehaviorForm dog={props.node} relay_environment={relay.environment} />
                        </Container>
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

export default withAuthenticationRequired(DogBehaviorCreator, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
