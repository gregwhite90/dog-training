import React from 'react';
import Container from 'react-bootstrap/Container';

const ContainerCard: React.FC<{}> = (props) => {
    return (
        <Container fluid="md" className="p-3 mb-3 border rounded">
            {props.children}
        </Container>
    );
}

export default ContainerCard;
