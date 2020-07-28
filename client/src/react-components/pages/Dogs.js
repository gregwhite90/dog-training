import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import DogsList from '../../relay/query-renderers/DogsList';
import AddDogForm from '../forms/AddDogForm';

export default function Dogs({relay: { environment }}) {
    const { user, isAuthenticated } = useAuth0();
    // TODO: authenticate if a user tries to access route without being logged in.
    // TODO: route on to more specific routes?
    // TODO: Form to add a new dog
    return (
        <>
            <h1>My dogs</h1>
            <DogsList relay={{environment}} />
            <h1>Add a dog!</h1>
            <AddDogForm relay={{environment}}/>
        </>
    );
}
