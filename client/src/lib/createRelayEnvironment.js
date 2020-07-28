import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

export default function createEnvironment(getAccessTokenSilently) {
    function fetchQuery(
        operation,
        variables
    ) {
        return getAccessTokenSilently({
            audience: 'https://dog-training-staging.herokuapp.com/graphql',
            scope: 'read:viewer',
        }).then(token => {
            console.log(token);
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
            }).then(response => response.json());
        });
    }

    return new Environment({
        network: Network.create(fetchQuery),
        store: new Store(new RecordSource()),
    });
};
