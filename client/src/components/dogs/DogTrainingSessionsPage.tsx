import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

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
                        <Container fluid>
                            <DogBreadcrumb dog={props.node} final="sessions" active={true} />
                            <Container>
                                <DogTrainingSessionsApp dog={props.node} match={match} />
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

export default withAuthenticationRequired(DogTrainingSessionsPage, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
