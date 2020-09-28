import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import TrainingProgressTrainingSessionCard from 'components/training_progress/cards/TrainingProgressTrainingSessionCard';
import TrainingSessionName from 'components/training_sessions/TrainingSessionName';

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
                    <Container key={edge!.training_progress.seq} fluid="md" className="p-3 mb-3 border rounded">
                        <TrainingProgressTrainingSessionCard
                            trainingSessionToTrainingStageEdge={edge!}
                        />
                        <Row>
                            <Link to={`/sessions/${props.trainingSession.id}`}>
                                <TrainingSessionName
                                    date={true}
                                    time={true}
                                    minutes={false}
                                    trainingSession={props.trainingSession}
                                />
                            </Link>
                        </Row>
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
            ...TrainingSessionName_trainingSession
            trainingStages(
                first: 2147483647 # max GraphQLInt
            ) @connection(key: "TrainingSessionTrainingProgressesList_trainingStages") {
                edges {
                    training_progress {
                        seq
                    }
                    ...TrainingProgressTrainingSessionCard_trainingSessionToTrainingStageEdge
                }
            }
        }
    `,
});
