import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import DogCard from './DogCard';

function DogsList(props) {
    const nodes =
        props && props.viewer && props.viewer.dogs && props.viewer.dogs.edges
        ? props.viewer.dogs.edges
               .filter(Boolean)
               .map(edge => edge.node)
               .filter(Boolean)
        : [];
    return (
        <>
            {nodes.map(node => <DogCard key={node.id} dog={node} />)}
        </>
    );
}

export default createFragmentContainer(DogsList, {
    viewer: graphql`
        fragment DogsList_viewer on User {
            id
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
