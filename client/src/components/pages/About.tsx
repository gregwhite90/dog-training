import React from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

// TODO: add a top level header
// TODO: make the spacing actually look good.
// TODO: add an acknowledgement for the pictures
// TODO: get the bucket name from heroku config var?
const About: React.FC<{}> = (props) => {
    const bucket_dir = "https://dog-training-staging-assets.s3.us-east-1.amazonaws.com/public";
    return (
        <Container fluid>
            <Row className="text-center">
              <h1>
                Attapuppy helps you train your dog better
              </h1>
            </Row>
            <Row>
                <Col lg={6}>
                    <Card className="mb-3" bg="light">
                        <Card.Header as="h2">
                            Be a better obedience trainer
                        </Card.Header>
                        <Card.Img
                            variant="top"
                            src={`${process.env.REACT_APP_S3_BUCKET_URL}/public/pexels-helena-lopes-3705254.jpg`}
                        />
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>Plan and evaluate</h3>
                                <p>
                                    Plan how you want to train a behavior. Track your dog's progression along your plan.
                    </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>Diagnose and solve problems</h3>
                                <p>
                                    Figure out problem areas and progress plateaus.
                                    Plan for fixes and breakthroughs.
                                    Continue progressing on the behavior.
                    </p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="mb-3" bg="light">
                        <Card.Header as="h2">
                            Collaborate with others
                </Card.Header>
                        <Card.Img
                            variant="top"
                            src={`${process.env.REACT_APP_S3_BUCKET_URL}/public/pexels-visionpic-net-341378.jpg`}
                        />
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>Be consistent</h3>
                                <p>
                                    Present a consistent front so your dog can understand
                                    what you expect from and how you ask for each behavior.
                                    Dogs don't speak our language. Help them by asking for
                                    a behavior the same way, and rewarding the same thing.
                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h3>Make steady progress</h3>
                                <p>
                                    Pick up where others training your dog have left off.
                                    Update others when you've made progress training a behavior.
                                </p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
