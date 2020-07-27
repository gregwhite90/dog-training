import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import DogsList from '../../relay/query-renderers/DogsList';

export default function Dogs({relay: { environment }}) {
    const { user, isAuthenticated } = useAuth0();
    // TODO: authenticate if a user tries to access route without being logged in.
    // TODO: route on to more specific routes?
    // TODO: Form to add a new dog
    return <DogsList relay={{environment}} />;
}
