import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

import type { DogBreadcrumb_dog } from '__generated__/DogBreadcrumb_dog.graphql';

interface DogBreadcrumbProps {
    active: boolean,
    behaviors: boolean,
    dog: DogBreadcrumb_dog,
};

const DogBreadcrumb: React.FC<DogBreadcrumbProps> = (props) => {
    return props.dog && (
        <Container>
            <Breadcrumb>
                <LinkContainer to="/dogs">
                    <Breadcrumb.Item>
                        All my dogs
                    </Breadcrumb.Item>
                </LinkContainer>
                <LinkContainer to={`/dogs/${props.dog.id}`}>
                    <Breadcrumb.Item active={!props.behaviors && props.active}>
                        {props.dog.name}
                    </Breadcrumb.Item>
                </LinkContainer>
                <LinkContainer to={`/dogs/${props.dog.id}/behaviors`}>
                    <Breadcrumb.Item active={props.behaviors && props.active}>
                        All behaviors
                    </Breadcrumb.Item>
                </LinkContainer>
            </Breadcrumb>
        </Container>
    );
}

export default createFragmentContainer(DogBreadcrumb, {
    dog: graphql`
        fragment DogBreadcrumb_dog on Dog {
            id
            name
        }
    `,
});
