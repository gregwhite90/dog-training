import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import TrainingStageCard from './TrainingStageCard';
import TrainingStageBreadcrumb from './TrainingStageBreadcrumb';

// TODO: authorization check

// TODO: fix any types
// TODO: create the behavior detail query
import type { TrainingStageDetailQuery } from '__generated__/TrainingStageDetailQuery.graphql';
import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface TrainingStageDetailProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    training_stage_id: string,
}

const TrainingStageDetail: React.FC<TrainingStageDetailProps> = ({ relay, match, training_stage_id }) => {
    return (
        <QueryRenderer<TrainingStageDetailQuery>
            environment={relay.environment}
            query={graphql`
                query TrainingStageDetailQuery($id: ID!) {
                    node(id: $id) {
                        ...TrainingStageCard_trainingStage
                        ...TrainingStageBreadcrumb_trainingStage
                    }
                }
                `}
            variables={{ id: training_stage_id }}
            render={({ error, props }) => {
                if (props && props.node) {
                    return (
                        <>
                            <TrainingStageBreadcrumb
                                trainingStage={props.node}
                                progresses={false}
                                active={true}
                            />
                            <Container>
                                <TrainingStageCard trainingStage={props.node} />
                                <Link to={`${match.url}/progress`}>
                                    <Button variant="primary">
                                        View training progress
                                    </Button>
                                </Link>
                            </Container>
                        </>
                    );
                } else if (error) {
                    console.log(error);
                    return <div>{error.message}</div>;
                }

                return <div>Loading...</div>;
            }}
        />
    );
}

export default withAuthenticationRequired(TrainingStageDetail, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
