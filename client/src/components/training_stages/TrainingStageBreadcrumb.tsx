import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

import TrainingStageName from 'components/training_stages/TrainingStageName';

import type { TrainingStageBreadcrumb_trainingStage } from '__generated__/TrainingStageBreadcrumb_trainingStage.graphql';

interface TrainingStageBreadcrumbProps {
    active: boolean,
    progresses: boolean,
    trainingStage: TrainingStageBreadcrumb_trainingStage,
};

const TrainingStageBreadcrumb: React.FC<TrainingStageBreadcrumbProps> = (props) => {
    return props.trainingStage
        && props.trainingStage.behavior
        && props.trainingStage.behavior.dog
        && (
            <Container>
                <Breadcrumb>
                    <LinkContainer to="/dogs">
                        <Breadcrumb.Item>
                            All my dogs
                        </Breadcrumb.Item>
                    </LinkContainer>
                    <LinkContainer to={`/dogs/${props.trainingStage.behavior.dog.id}`}>
                        <Breadcrumb.Item>
                            {props.trainingStage.behavior.dog.name}
                        </Breadcrumb.Item>
                    </LinkContainer>
                    <LinkContainer to={`/dogs/${props.trainingStage.behavior.dog.id}/behaviors`}>
                        <Breadcrumb.Item>
                            All behaviors for {props.trainingStage.behavior.dog.name}
                        </Breadcrumb.Item>
                    </LinkContainer>
                    <LinkContainer to={`/behaviors/${props.trainingStage.behavior.id}`}>
                        <Breadcrumb.Item>
                            {props.trainingStage.behavior.name}
                        </Breadcrumb.Item>
                    </LinkContainer>
                    <LinkContainer to={`/behaviors/${props.trainingStage.behavior.id}/stages`}>
                        <Breadcrumb.Item>
                            All training stages for {props.trainingStage.behavior.name}
                        </Breadcrumb.Item>
                    </LinkContainer>
                    <LinkContainer to={`/stages/${props.trainingStage.id}`}>
                        <Breadcrumb.Item active={!props.progresses && props.active}>
                            <TrainingStageName
                                detail={false}
                                trainingStage={props.trainingStage}
                            />
                        </Breadcrumb.Item>
                    </LinkContainer>
                    {props.progresses &&
                        (
                            <LinkContainer to={`/stages/${props.trainingStage.id}/progress`}>
                                <Breadcrumb.Item active={props.active}>
                                    Progress on stage
                                </Breadcrumb.Item>
                            </LinkContainer>
                        )
                    }
                </Breadcrumb>
            </Container>
        );
}

export default createFragmentContainer(TrainingStageBreadcrumb, {
    trainingStage: graphql`
        fragment TrainingStageBreadcrumb_trainingStage on TrainingStage {
            id
            ...TrainingStageName_trainingStage
            behavior {
                name
                id
                dog {
                    id
                    name
                }
            }
        }
    `,
});
