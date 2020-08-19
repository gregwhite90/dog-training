import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';

import BehaviorCard from 'components/behaviors/BehaviorCard';
import DogBehaviorsApp from './DogBehaviorsApp';

// TODO: authorization check

// TODO: fix any types
import type { DogBehaviorsPageQuery } from '__generated__/DogBehaviorsPageQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { IEnvironment } from 'relay-runtime';

interface MatchParams { }

interface DogBehaviorsPageProps extends RouteComponentProps<MatchParams> {
    relay: {
        environment: IEnvironment,
    },
    dog_id: string,
}

const DogBehaviorsPage: React.FC<DogBehaviorsPageProps> = ({ relay, match, dog_id }) => {
    return (
        <QueryRenderer<DogBehaviorsPageQuery>
            environment={relay.environment}
            query={graphql`
                query DogBehaviorsPageQuery($id: ID!) {
                    node(id: $id) {
                        ...DogBehaviorsApp_dog
                    }
                }
                `}
            variables={{ id: dog_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <Container>
                            <DogBehaviorsApp dog={props.node} match={match} />
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

export default withAuthenticationRequired(DogBehaviorsPage, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
