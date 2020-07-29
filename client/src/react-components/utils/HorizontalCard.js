import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import AuthS3Image from './AuthS3Image';

export default function HorizontalCard({
    imgCols,
    node: {
        picture,
        picture_needs_s3,
        title,
        text
    },
}) {
    imgCols = imgCols || 3;
    return (
        <Container fluid="md" className="p-3 mb-3 border rounded">
            <Row className="no-gutters">
                <Col md={imgCols}>
                    {picture &&
                     (picture_needs_s3
                     ? <AuthS3Image className="p-2" thumbnail picture={picture} />
                     : <Image className="p-2" src={picture} thumbnail />
                     )}
                </Col>
                <Col md={12 - imgCols}>
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
