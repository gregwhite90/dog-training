import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import DogCard from './DogCard';

function DogsList(props) {
    return (
        <>
            {props.user.dogs.edges
                  .map(e => e.node)
                  .map(dog => <DogCard key={dog.id} dog={dog} />)
            }
        </>
    );
}

export default createFragmentContainer(DogsList, {
    user: graphql`
        fragment DogsList_user on User {
            dogs(
                first: 2147483647 # max GraphQLInt
            ) @connection(key: "DogsList_dogs") {
                edges {
                    node {
                        id
                        ...DogCard_dog
                    }
                }
            }
        }
    `,
});
