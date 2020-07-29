import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default function HorizontalCard({imgCols, node: {picture, title, text}}) {
    imgCols = imgCols || 3;
    return (
        <Container fluid="md" className="p-3 border rounded">
            <Row className="no-gutters">
                <Col className={`md-${imgCols}`}>
                    {picture &&
                     (<Image className="p-2" src={picture} thumbnail />)
                    }
                </Col>
                <Col className={`md-${12 - imgCols}`}>
                    <h3>{title}</h3>
                    {text &&
                     (<p>
                         {text}
                     </p>)
                    }
                </Col>
            </Row>
        </Container>
    );
}
