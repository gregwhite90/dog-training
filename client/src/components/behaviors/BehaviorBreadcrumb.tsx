import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

import type { BehaviorBreadcrumb_behavior } from '__generated__/BehaviorBreadcrumb_behavior.graphql';

interface BehaviorBreadcrumbProps {
    active: boolean,
    behavior: BehaviorBreadcrumb_behavior,
};

const BehaviorBreadcrumb: React.FC<BehaviorBreadcrumbProps> = (props) => {
    return props.behavior && props.behavior.dog && (
        <Container>
            <Breadcrumb>
                <LinkContainer to="/dogs">
                    <Breadcrumb.Item>
                        All my dogs
                    </Breadcrumb.Item>
                </LinkContainer>
                <LinkContainer to={`/dogs/${props.behavior.dog.id}`}>
                    <Breadcrumb.Item>
                        {props.behavior.dog.name}
                    </Breadcrumb.Item>
                </LinkContainer>
                <LinkContainer to={`/dogs/${props.behavior.dog.id}/behaviors`}>
                    <Breadcrumb.Item>
                        All behaviors for {props.behavior.dog.name}
                    </Breadcrumb.Item>
                </LinkContainer>
                <LinkContainer to={`/behaviors/${props.behavior.id}`}>
                    <Breadcrumb.Item active={props.active}>
                        {props.behavior.name}
                    </Breadcrumb.Item>
                </LinkContainer>
            </Breadcrumb>
        </Container>
    );
}

export default createFragmentContainer(BehaviorBreadcrumb, {
    behavior: graphql`
        fragment BehaviorBreadcrumb_behavior on Behavior {
            id
            name
            dog {
                name
                id
            }
        }
    `,
});
