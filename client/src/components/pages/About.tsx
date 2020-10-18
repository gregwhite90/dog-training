import React from 'react';

import Container from 'react-bootstrap/Container';

// TODO: add a top level header
// TODO: make the spacing actually look good.
const About: React.FC<{}> = (props) => {
    return (
        <Container fluid>
            <h1>
                Attapuppy helps you train your dog better
          </h1>
            <h2>
                Be a better obedience trainer
            </h2>
            <h3>Plan and evaluate</h3>
            <p>
                Plan how you want to train a behavior. Track your dog's progression along your plan.
            </p>
            <h3>Diagnose and solve problems in training</h3>
            <p>
                Figure out problem areas and progress plateaus.
                Plan for fixes and breakthroughs.
                Continue progressing on the behavior.
              </p>
            <h2>
                Collaborate with others
            </h2>
            <h3>Be consistent</h3>
            <p>
                Present a consistent front so your dog can understand what you expect
                from and how you ask for each behavior. Dogs don't speak our language.
                They are more likely to understand what to do if you and everyone else
                who trains your dog can be consistent. In what you say and do to ask for
                a behavior, and in what then earns a reward.
              </p>
            <h3>Make steady progress</h3>
            <p>
                Pick up where others training your dog have left off. Update others when
                you've made progress training a behavior.
              </p>
        </Container>
    );
}

export default About;
