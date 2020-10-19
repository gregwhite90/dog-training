import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


import DogCard from './DogCard';
import DogBreadcrumb from './DogBreadcrumb';

// TODO: authorization check

// TODO: fix any types
import type { DogDetailQuery } from '__generated__/DogDetailQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface DogDetailProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    dog_id: string,
}

const DogDetail: React.FC<DogDetailProps> = ({ relay, match, dog_id }) => {
    return (
        <QueryRenderer<DogDetailQuery>
            environment={relay.environment}
            query={graphql`
                query DogDetailQuery($id: ID!) {
                    node(id: $id) {
                        ...DogCard_dog
                        ...DogBreadcrumb_dog
                    }
                }
                `}
            variables={{ id: dog_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <Container fluid>
                            <DogBreadcrumb dog={props.node} active={true} />
                            <Container>
                                <DogCard dog={props.node} />
                                <Link to={`${match.url}/behaviors`}>
                                    <Button variant="primary">
                                        View desired behaviors
                                    </Button>
                                </Link>
                                <Link to={`${match.url}/sessions`}>
                                    <Button variant="primary">
                                        View training sessions
                                    </Button>
                                </Link>
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

export default withAuthenticationRequired(DogDetail, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
