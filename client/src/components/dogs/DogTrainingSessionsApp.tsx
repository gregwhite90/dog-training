import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import DogTrainingSessionsList from './DogTrainingSessionsList';

import type { DogTrainingSessionsApp_dog } from '__generated__/DogTrainingSessionsApp_dog.graphql';
import type { match } from 'react-router-dom';

interface DogTrainingSessionsAppProps {
    dog: DogTrainingSessionsApp_dog,
    match: match<{}>,
};

const DogTrainingSessionsApp: React.FC<DogTrainingSessionsAppProps> = (props) => {
    return (
        <>
            <h3>Training sessions for {props.dog.name}</h3>
            <DogTrainingSessionsList dog={props.dog} match={props.match} />
            <Link to={props.match.url + "/add"}>
                <Button variant="primary">Add a training session!</Button>
            </Link>
        </>
    );
}

export default createFragmentContainer(DogTrainingSessionsApp, {
    dog: graphql`
        fragment DogTrainingSessionsApp_dog on Dog {
            id
            name
            ...DogTrainingSessionsList_dog
        }
    `,
});
