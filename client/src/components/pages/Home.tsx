import React from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import LoginButton from 'components/authentication/LoginButton';

interface HomeProps {
    img_url: string;
}

const Home: React.FC<HomeProps> = ({ img_url }) => (
    <Jumbotron
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img_url})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginBottom: "0px",
            color: "$base3",
        }}
        fluid
    >
      <h1>
        Your dog doesn't speak human. Help them.
      </h1>
      <h1>
        <LoginButton variant="primary" size="lg" />
      </h1>
      <h2>
        <Link to="/about">
          <Button
              variant="primary"
              size="sm"
          >
                Learn more
            </Button>
        </Link>
      </h2>
    </Jumbotron>

);

export default Home;
