import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

import type { TrainingSessionBreadcrumb_trainingSession } from '__generated__/TrainingSessionBreadcrumb_trainingSession.graphql';

interface TrainingSessionBreadcrumbProps {
    active: boolean,
    trainingSession: TrainingSessionBreadcrumb_trainingSession,
};

const TrainingSessionBreadcrumb: React.FC<TrainingSessionBreadcrumbProps> = (props) => {
    const start_dt = new Date(props.trainingSession.start_timestamp as string);
    return props.trainingSession
        && props.trainingSession.dog
        && (
            <Container>
                <Breadcrumb>
                    <LinkContainer to="/dogs">
                        <Breadcrumb.Item>
                            All my dogs
                        </Breadcrumb.Item>
                    </LinkContainer>
                    <LinkContainer to={`/dogs/${props.trainingSession.dog.id}`}>
                        <Breadcrumb.Item>
                            {props.trainingSession.dog.name}
                        </Breadcrumb.Item>
                    </LinkContainer>
                    <LinkContainer to={`/dogs/${props.trainingSession.dog.id}/sessions`}>
                        <Breadcrumb.Item>
                            All training sessions for {props.trainingSession.dog.name}
                        </Breadcrumb.Item>
                    </LinkContainer>
                    <LinkContainer to={`/sessions/${props.trainingSession.id}`}>
                        <Breadcrumb.Item active={props.active}>
                            Session starting {start_dt.toDateString()} at {start_dt.toTimeString()}
                        </Breadcrumb.Item>
                    </LinkContainer>
                </Breadcrumb>
            </Container>
        );
}

export default createFragmentContainer(TrainingSessionBreadcrumb, {
    trainingSession: graphql`
        fragment TrainingSessionBreadcrumb_trainingSession on TrainingSession {
            id
            start_timestamp
            dog {
                name
                id
            }
        }
    `,
});
