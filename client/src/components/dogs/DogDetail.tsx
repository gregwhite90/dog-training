import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import Container from 'react-bootstrap/Container';

import DogCard from './DogCard';
import InviteUserByEmailForm from './InviteUserByEmailForm';
import CreateBehaviorForm from './CreateBehaviorForm';

// TODO: authorization check

// TODO: fix any types
import type { DogDetailQuery } from '__generated__/DogDetailQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { IEnvironment } from 'relay-runtime';

interface MatchParams {
    id: string,
}

interface DogDetailProps extends RouteComponentProps<MatchParams> {
    relay: {
        environment: IEnvironment,
    },
}

const DogDetail: React.FC<DogDetailProps> = ({ relay, match }) => {
    return (
        <QueryRenderer<DogDetailQuery>
            environment={relay.environment}
            query={graphql`
                query DogDetailQuery($id: ID!) {
                    node(id: $id) {
                        ...DogCard_dog
                        ...InviteUserByEmailForm_dog
                        ...CreateBehaviorForm_dog
                    }
                }
                `}
            variables={{ id: match.params.id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <Container>
                            <DogCard dog={props.node} />
                            <InviteUserByEmailForm dog={props.node} relay_environment={relay.environment} />
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

export default DogDetail;
