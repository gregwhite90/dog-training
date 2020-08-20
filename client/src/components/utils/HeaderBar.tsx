import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

interface Props {
    button: {
        text: string,
        link: string,
        cols?: number,
    },
    header: {
        text: string,
    },
}

const HeaderBar: React.FC<Props> = (props) => {
    const button_cols = props.button.cols || 2;
    return (
        <Container fluid>
            <Row>
                <Col md={button_cols}>
                    <LinkContainer to={props.button.link}>
                        <Button variant="secondary">
                            {props.button.text}
                        </Button>
                    </LinkContainer>
                </Col>
                <Col md={12 - button_cols}>
                    <h1>
                        {props.header.text}
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderBar;
