import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import DogsListQuery from '../../relay/query-renderers/DogsListQuery';
import AddDogForm from '../forms/AddDogForm';

export default function Dogs(props) {
    // TODO: authenticate if a user tries to access route without being logged in.
    // TODO: route on to more specific routes?
    return (
        <>
            <h1>My dogs</h1>
            <DogsListQuery relay={props.relay} />
            <h1>Add a dog!</h1>
            <AddDogForm relay={props.relay}/>
        </>
    );
}
