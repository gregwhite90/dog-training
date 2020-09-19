import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import type { match } from 'react-router-dom';
import type { TrainingSessionTrainingProgressesList_trainingSession } from '__generated__/TrainingSessionTrainingProgressesList_trainingSession.graphql';

// TODO: import "match params" (empty object because hardcoded route) from parent component?
interface TrainingSessionTrainingProgressesListProps {
    trainingSession: TrainingSessionTrainingProgressesList_trainingSession,
    match: match<{}>,
}

const TrainingSessionTrainingProgressesList: React.FC<TrainingSessionTrainingProgressesListProps> = (props) => {
    const edges =
        props
            && props.trainingSession
            && props.trainingSession.trainingStages
            && props.trainingSession.trainingStages.edges
            ? props.trainingSession.trainingStages.edges.filter(Boolean)
            : [];
    return (
        <>
            {edges.map(edge => {
                return (
                    <Container key={edge!.seq}>
                        {edge!.successes &&
                            (
                                <span>{edge!.successes} successes</span>
                            )
                        }
                        {edge!.attempts &&
                            (
                                <span>{edge!.successes && "on"}{edge!.attempts} attempts</span>
                            )
                        }
                    </Container>
                );
            })}
            {!edges || edges.length === 0 &&
                (
                    <Link to={props.match.url + "/add"}>
                        <Button variant="primary">Log training progress</Button>
                    </Link>
                )
            }
        </>
    );
}

export default createFragmentContainer(TrainingSessionTrainingProgressesList, {
    trainingSession: graphql`
        fragment TrainingSessionTrainingProgressesList_trainingSession on TrainingSession {
            id
            trainingStages(
                first: 2147483647 # max GraphQLInt
            ) @connection(key: "TrainingSessionTrainingProgressesList_trainingStages") {
                edges {
                    node {
                        id
                    }
                    seq
                    successes
                    attempts
                    distance
                    distractions
                    duration
                }
            }
        }
    `,
});
