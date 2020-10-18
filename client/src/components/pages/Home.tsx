import React from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LoginButton from 'components/authentication/LoginButton';

interface HomeProps {
    img_url: string;
}

const Home: React.FC<HomeProps> = ({ img_url }) => (
    <Row className="flex-grow-1 mb-0">
    <Jumbotron
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img_url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }}
    fluid
    >
    <Container fluid>
      <Row className="mb-3">
        <h1 style={{ color: "white" }}>
          Your dog doesn't speak human. Help them.
        </h1>
      </Row>
      <Row className="mb-3">
        <LoginButton variant="primary" size="lg" />
      </Row>
      <Row className="mb-3">
        <Link to="/about">
          <Button
              variant="primary"
              size="sm"
          >
            Learn more
          </Button>
        </Link>
      </Row>
    </Container>
    </Jumbotron>
    </Row>
);

export default Home;
