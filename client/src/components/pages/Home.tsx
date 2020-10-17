import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

interface HomeProps {
    img_url: string;
}

const Home: React.FC<HomeProps> = ({ img_url }) => (
    <Jumbotron
        style={{
            backgroundImage: `url(${img_url})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}
        fluid
    >
      <h1>
        Your dog doesn't speak human.<br />
        Help them.
      </h1>
    </Jumbotron>

);

export default Home;
