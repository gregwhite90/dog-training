import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { graphql, QueryRenderer } from 'react-relay';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import DogsApp from './DogsApp';
import DogsBreadcrumb from './DogsBreadcrumb';

import type { DogsPageQuery } from '__generated__/DogsPageQuery.graphql';
import type { RelayProp } from 'react-relay';
import type { RouteComponentProps } from 'react-router-dom';

// TODO: pass down the match params (empty object in this case)
interface DogsPageProps extends RouteComponentProps<{}> {
    relay: RelayProp,
}

const DogsPage: React.FC<DogsPageProps> = ({ relay, match }) => {
    // TODO: authenticate if a user tries to access route without being logged in.
    // TODO: route on to more specific routes?
    return (
        <QueryRenderer<DogsPageQuery>
            environment={relay.environment}
            query={graphql`
                query DogsPageQuery {
                    viewer {
                        ...DogsApp_viewer
                    }
                }
                `}
            cacheConfig={{
                poll: 10000 // 10 seconds
            }}
            variables={{}}
            render={({ error, props }) => {
                if (props && props.viewer) {
                    return (
                        <Container fluid>
                            <DogsBreadcrumb active={true} />
                            <DogsApp viewer={props.viewer} match={match} />
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

export default withAuthenticationRequired(DogsPage, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
