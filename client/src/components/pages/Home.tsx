import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

interface HomeProps {
    img_url: string;
}

const Home: React.FC<HomeProps> = ({ img_url }) => (
    <Jumbotron
        style={{
            backgroundImage: `url(${img_url})`,
        }}
    >
      Your dog doesn't speak human. Help them.
    </Jumbotron>

);

export default Home;
