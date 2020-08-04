import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

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
            {nodes.map(node => {
                 return (
                     <Link to={`${props.match.url}/${node.id}`}>
                         <DogCard key={node.id} dog={node} />
                     </Link>
                 );
            })}
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
