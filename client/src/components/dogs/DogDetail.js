import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import Container from 'react-bootstrap/Container';

import DogCard from './DogCard';
import UserAdder from './UserAdder';

// TODO: authorization check

export default function DogDetail({relay, match}) {
    return (
        <QueryRenderer
            environment={relay.environment}
            query={graphql`
                query DogDetailQuery($id: ID!) {
                    node(id: $id) {
                        ...DogCard_dog
                        ...UserAdder_dog
                    }
                }
                `}
            variables={{id: match.params.id}}
            render={({error, props}) => {
                    if (props && props.node) {
                        return (
                            <Container>
                                <DogCard dog={props.node} />
                                <UserAdder dog={props.node} relay={relay}/>
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
