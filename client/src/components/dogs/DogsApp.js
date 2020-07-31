import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import DogsList from './DogsList';
import AddDogForm from './AddDogForm';
import AddDogMutation from 'relay/mutations/AddDogMutation';

function DogsApp(props) {
    const handleAddDogSubmit = ({name, picture}, callback) => {
        AddDogMutation.commit(props.relay.environment, {name, picture}, props.viewer);
        callback();
        return;
    };

    return (
        <>
            <h1>My dogs</h1>
            <DogsList viewer={props.viewer} />
            <h1>Add a dog!</h1>
            <AddDogForm onSubmit={() => handleAddDogSubmit()} />
        </>
    );
}

export default createFragmentContainer(DogsApp, {
    viewer: graphql`
        fragment DogsApp_viewer on User {
            id
            ...DogsList_viewer
        }
    `,
});
