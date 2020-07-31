import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import AuthS3Image from './AuthS3Image';

export default function HorizontalCard(props) {
    const imgCols = props.imgCols || 3;
    return (
        <Container fluid="md" className="p-3 mb-3 border rounded">
            <Row className="no-gutters">
                <Col md={imgCols}>
                    {props.node.picture &&
                     (props.node.picture_needs_s3
                     ? <AuthS3Image className="p-2" picture={props.node.picture} rounded />
                     : <Image className="p-2" src={props.node.picture} rounded />
                     )}
                </Col>
                <Col md={12 - props.imgCols}>
                    <h3>{props.node.title}</h3>
                    {props.node.text &&
                     (<p>
                         {props.node.text}
                     </p>)
                    }
                </Col>
            </Row>
        </Container>
    );
}
