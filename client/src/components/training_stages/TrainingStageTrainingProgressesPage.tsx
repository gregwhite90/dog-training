import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import TrainingStageBreadcrumb from './TrainingStageBreadcrumb';

import TrainingStageTrainingProgressesApp from './TrainingStageTrainingProgressesApp';

import type { TrainingStageTrainingProgressesPageQuery } from '__generated__/TrainingStageTrainingProgressesPageQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface TrainingStageTrainingProgressesPageProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    training_stage_id: string,
}

// TODO: only allow for the creation once.
const TrainingStageTrainingProgressesPage: React.FC<TrainingStageTrainingProgressesPageProps> = ({ relay, match, training_stage_id }) => {
    return (
        <QueryRenderer<TrainingStageTrainingProgressesPageQuery>
            environment={relay.environment}
            query={graphql`
                query TrainingStageTrainingProgressesPageQuery($id: ID!) {
                    node(id: $id) {
                        ...TrainingStageTrainingProgressesApp_trainingStage
                        ...TrainingStageBreadcrumb_trainingStage
                    }
                }
                `}
            variables={{ id: training_stage_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <Container fluid>
                            <TrainingStageBreadcrumb
                                trainingStage={props.node}
                                progresses={true}
                                active={true}
                            />
                            <Container>
                                <TrainingStageTrainingProgressesApp trainingStage={props.node} match={match} />
                            </Container>
                        </Container>
                    );
                } else if (error) {
                    console.log(error);
                    return <div>{error.message}</div>;
                }

                return (
                    <Spinner animation="border" variant="primary">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                );
            }}
        />
    );
}

export default withAuthenticationRequired(TrainingStageTrainingProgressesPage, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
