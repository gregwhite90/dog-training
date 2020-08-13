import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import DogBehaviorsList from './DogBehaviorsList';

import type { DogBehaviorsApp_dog } from '__generated__/DogBehaviorsApp_dog.graphql';
import type { match } from 'react-router-dom';

interface DogBehaviorsAppProps {
    dog: DogBehaviorsApp_dog,
    match: match<{}>,
};

const DogBehaviorsApp: React.FC<DogBehaviorsAppProps> = (props) => {
    return (
        <>
            <h3>Desired behaviors for {props.dog.name}</h3>
            <DogBehaviorsList dog={props.dog} match={props.match} />
            <Link to={props.match.url + "/add"}>
                <Button variant="primary">Add a behavior!</Button>
            </Link>
        </>
    );
}

export default createFragmentContainer(DogBehaviorsApp, {
    dog: graphql`
        fragment DogBehaviorsApp_dog on Dog {
            id
            name
            ...DogBehaviorsList_dog
        }
    `,
});
