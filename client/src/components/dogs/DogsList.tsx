import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import DogCard from './DogCard';

import type { match } from 'react-router-dom';
import type { DogsList_viewer } from '__generated__/DogsList_viewer.graphql';
import type { UserDogRole } from 'generated/graphql';

// TODO: import "match params" (empty object because hardcoded route) from parent component?
interface DogsListProps {
    viewer: DogsList_viewer,
    match: match<{}>,
    linkSuffix?: string,
}

const DogsList: React.FC<DogsListProps> = (props) => {
    const edges =
        props && props.viewer && props.viewer.dogs && props.viewer.dogs.edges
            ? props.viewer.dogs.edges.filter(Boolean)
            : [];
    return (
        <>
            {edges.map(edge => {
                return (
                    <Link to={`/dogs/${edge!.node!.id}${props.linkSuffix && props.linkSuffix}`}>
                        <DogCard key={edge!.node!.id} dog={edge!.node!} role={edge!.user_role as UserDogRole} />
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
