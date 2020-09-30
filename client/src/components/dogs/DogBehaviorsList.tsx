import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import BehaviorCard from 'components/behaviors/BehaviorCard';

import type { match } from 'react-router-dom';
import type { DogBehaviorsList_dog } from '__generated__/DogBehaviorsList_dog.graphql';

// TODO: import "match params" (empty object because hardcoded route) from parent component?
interface DogBehaviorsListProps {
    dog: DogBehaviorsList_dog,
    match: match<{}>,
}

const DogBehaviorsList: React.FC<DogBehaviorsListProps> = (props) => {
    const edges =
        props && props.dog && props.dog.behaviors && props.dog.behaviors.edges
            ? props.dog.behaviors.edges.filter(Boolean)
            : [];
    return (
        <>
            {edges.map(edge => {
                return (
                    <Link to={`/behaviors/${edge!.node!.id}`}>
                        <BehaviorCard key={edge!.node!.id} behavior={edge!.node!} />
                    </Link>
                );
            })}
        </>
    );
}

export default createFragmentContainer(DogBehaviorsList, {
    dog: graphql`
        fragment DogBehaviorsList_dog on Dog {
            id
            behaviors(
                first: 2147483647 # max GraphQLInt
            ) @connection(key: "DogBehaviorsList_behaviors") {
                edges {
                    node {
                        id
                        ...BehaviorCard_behavior
                    }
                }
            }
        }
    `,
});
