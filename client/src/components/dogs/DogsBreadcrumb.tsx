import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

interface DogsBreadcrumbProps {
    active: boolean,
};

const DogsBreadcrumb: React.FC<DogsBreadcrumbProps> = (props) => {
    return (
        <Container>
            <Breadcrumb>
                <LinkContainer to="/dogs">
                    <Breadcrumb.Item active={props.active}>
                        All my dogs
                    </Breadcrumb.Item>
                </LinkContainer>
            </Breadcrumb>
        </Container>
    );
}

export default DogsBreadcrumb;
