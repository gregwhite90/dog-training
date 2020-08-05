import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import DogCard from './DogCard';

function DogsList(props) {
    const edges =
        props && props.viewer && props.viewer.dogs && props.viewer.dogs.edges
        ? props.viewer.dogs.edges.filter(Boolean)
        : [];
    return (
        <>
            {edges.map(edge => {
                 return (
                     <Link to={`${props.match.url}/${edge.node.id}`}>
                         <DogCard key={edge.node.id} dog={edge.node} role={edge.user_role}/>
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
                    user_role
                    node {
                        id
                        ...DogCard_dog
                    }
                }
            }
        }
    `,
});
