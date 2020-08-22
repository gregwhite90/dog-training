import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

import type { DogBreadcrumb_dog } from '__generated__/DogBreadcrumb_dog.graphql';

interface DogBreadcrumbProps {
    active: boolean,
    final?: "behaviors" | "sessions",
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
                    <Breadcrumb.Item active={!props.final && props.active}>
                        {props.dog.name}
                    </Breadcrumb.Item>
                </LinkContainer>
                {props.final && (
                    <LinkContainer to={`/dogs/${props.dog.id}/${props.final}`}>
                        <Breadcrumb.Item active={props.final && props.active}>
                            All {props.final} for {props.dog.name}
                        </Breadcrumb.Item>
                    </LinkContainer>
                )}
            </Breadcrumb>
        </Container >
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
