import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function HorizontalCard({imgCols, node: {picture, title, text}}) {
    imgCols = imgCols || 3;
    return (
        <Card fluid="md">
            <Row className="no-gutters">
                <Col className="md-{imgCols}">
                    {picture &&
                     (<Card.Img src={picture} />)
                    }
                </Col>
                <Col className="md-{12 - imgCols}">
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                        {text &&
                         (<Card.Text>
                             {text}
                         </Card.Text>)
                        }
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}
