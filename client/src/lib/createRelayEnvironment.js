import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';
import { useAuth0 } from '@auth0/auth0-react';

function fetchQuery(
    operation,
    variables,
) {
    const { getAccessTokenSilently } = useAuth0();
    const token = getAccessTokenSilently().then(token => token);
    // TODO: error-handling code
    return fetch('/graphql', {
        method: 'POST',
        headers: {
            'Accept': 'Application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
}

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

export default environment;
