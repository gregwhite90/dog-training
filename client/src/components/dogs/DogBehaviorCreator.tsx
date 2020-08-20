import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';

import DogBreadcrumb from './DogBreadcrumb';

import CreateBehaviorForm from './CreateBehaviorForm';

// TODO: authorization check

// TODO: fix any types
import type { DogBehaviorCreatorQuery } from '__generated__/DogBehaviorCreatorQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { IEnvironment } from 'relay-runtime';

interface MatchParams { }

interface DogBehaviorCreatorProps extends RouteComponentProps<MatchParams> {
    relay: {
        environment: IEnvironment,
    },
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
                        <>
                            <DogBreadcrumb
                                dog={props.node}
                                behaviors={true}
                                active={false}
                            />
                            <Container>
                                <CreateBehaviorForm dog={props.node} relay_environment={relay.environment} />
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

export default withAuthenticationRequired(DogBehaviorCreator, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
