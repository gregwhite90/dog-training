import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

import TrainingSessionName from './TrainingSessionName';

import type { TrainingSessionBreadcrumb_trainingSession } from '__generated__/TrainingSessionBreadcrumb_trainingSession.graphql';

interface TrainingSessionBreadcrumbProps {
    active: boolean,
    progresses: boolean,
    trainingSession: TrainingSessionBreadcrumb_trainingSession,
};

const TrainingSessionBreadcrumb: React.FC<TrainingSessionBreadcrumbProps> = (props) => {
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
                        <Breadcrumb.Item active={props.active && !props.progresses}>
                            <TrainingSessionName
                                trainingSession={props.trainingSession}
                                date={true}
                                time={true}
                                minutes={false}
                            />
                        </Breadcrumb.Item>
                    </LinkContainer>
                    {props.progresses &&
                        (
                            <LinkContainer to={`/sessions/${props.trainingSession.id}/progress`}>
                                <Breadcrumb.Item active={props.active}>
                                    Progress trained in session
                             </Breadcrumb.Item>
                            </LinkContainer>
                        )
                    }
                </Breadcrumb>
            </Container>
        );
}

export default createFragmentContainer(TrainingSessionBreadcrumb, {
    trainingSession: graphql`
        fragment TrainingSessionBreadcrumb_trainingSession on TrainingSession {
            id
            dog {
                name
                id
            }
            ...TrainingSessionName_trainingSession
        }
    `,
});
