import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import TrainingSessionCard from 'components/training_sessions/TrainingSessionCard';

import type { match } from 'react-router-dom';
import type { DogTrainingSessionsList_dog } from '__generated__/DogTrainingSessionsList_dog.graphql';

// TODO: import "match params" (empty object because hardcoded route) from parent component?
interface DogTrainingSessionsListProps {
    dog: DogTrainingSessionsList_dog,
    match: match<{}>,
}

const DogTrainingSessionsList: React.FC<DogTrainingSessionsListProps> = (props) => {
    const edges =
        props && props.dog && props.dog.trainingSessions && props.dog.trainingSessions.edges
            ? props.dog.trainingSessions.edges.filter(Boolean)
            : [];
    return (
        <>
            {edges.map(edge => {
                return (
                    <Link to={`/sessions/${edge!.node!.id}`}>
                        <TrainingSessionCard key={edge!.node!.id} trainingSession={edge!.node!} />
                    </Link>
                );
            })}
        </>
    );
}

export default createFragmentContainer(DogTrainingSessionsList, {
    dog: graphql`
        fragment DogTrainingSessionsList_dog on Dog {
            id
            trainingSessions(
                first: 2147483647 # max GraphQLInt
            ) @connection(key: "DogTrainingSessionsList_trainingSessions") {
                edges {
                    node {
                        id
                        ...TrainingSessionCard_trainingSession
                    }
                }
            }
        }
    `,
});
