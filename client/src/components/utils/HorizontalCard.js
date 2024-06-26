import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import AuthS3Image from './AuthS3Image';

function renderImage(props) {
    if (props.node.picture) {
        if (props.node.picture_needs_s3) {
            return <AuthS3Image
                       picture={props.node.picture}
                       toImageChild={{thumbnail: true, fluid: true }} />;
        } else {
            return <Image src={props.node.picture} fluid thumbnail />;
        }
    }
}

export default function HorizontalCard(props) {
    console.log('In horizontal card');
    console.log(props);
    const imgCols = props.imgCols || 3;
    return (
        <Container fluid="md" className="p-3 mb-3 border rounded">
            <Row>
                <Col md={imgCols}>{renderImage(props)}</Col>
                <Col md={12 - props.imgCols}>
                    <h3>{props.node.title} <Badge variant="secondary">{props.node.badge}</Badge></h3>
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
