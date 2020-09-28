import React from 'react';
import Container from 'react-bootstrap/Container';

// TODO: figure out the props type?
const ContainerCard: React.FC<any> = (props) => {
    return (
        <Container
            {...props}
            className="p-3 mb-3 border rounded"
        >
            {props.children}
        </Container>
    );
}

export default ContainerCard;
