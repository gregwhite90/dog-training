import React from 'react';

import Container from 'react-bootstrap/Container';

const About: React.FC<{}> = (props) => {
    return (
        <Container fluid>
            <h1>
                Be a better obedience trainer
            </h1>
            <h2>Plan and evaluate</h2>
            <p>
                Plan how you want to train a behavior. Track your dog's progression along your plan.
            </p>
            <h2>Diagnose</h2>
            <p>
                Figure out problem areas and progress plateaus.
                Plan for fixes and breakthroughs.
                Continue progressing on the behavior.
              </p>
            <h1>
                Collaborate with others
            </h1>
            <h2>Be consistent</h2>
            <p>
                Present a consistent front so your dog can understand what you expect
                from and how you ask for each behavior. Dogs don't speak our language.
                They are more likely to understand what to do if you and everyone else
                who trains your dog can be consistent. In what you say and do to ask for
                a behavior, and in what then earns a reward.
              </p>
            <h2>Make steady progress</h2>
            <p>
                Pick up where others training your dog have left off. Update others when
                you've made progress training a behavior.
              </p>
            <p>
            </p>
        </Container>
    );
}

export default About;
