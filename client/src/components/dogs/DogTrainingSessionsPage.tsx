import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';

import DogBreadcrumb from './DogBreadcrumb';

import DogTrainingSessionsApp from './DogTrainingSessionsApp';

// TODO: authorization check

// TODO: fix any types
import type { DogTrainingSessionsPageQuery } from '__generated__/DogTrainingSessionsPageQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface DogTrainingSessionsPageProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    dog_id: string,
}

const DogTrainingSessionsPage: React.FC<DogTrainingSessionsPageProps> = ({ relay, match, dog_id }) => {
    return (
        <QueryRenderer<DogTrainingSessionsPageQuery>
            environment={relay.environment}
            query={graphql`
                query DogTrainingSessionsPageQuery($id: ID!) {
                    node(id: $id) {
                        ...DogTrainingSessionsApp_dog
                        ...DogBreadcrumb_dog
                    }
                }
                `}
            variables={{ id: dog_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <>
                            <DogBreadcrumb dog={props.node} final="sessions" active={true} />
                            <Container>
                                <DogTrainingSessionsApp dog={props.node} match={match} />
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

export default withAuthenticationRequired(DogTrainingSessionsPage, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
