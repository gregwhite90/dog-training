import { installRelayDevTools } from 'relay-devtools';

import {
    Environment,
    Network,
    RecordSource,
    Store,
    Observable,
} from 'relay-runtime';

export default function createEnvironment(getAccessTokenSilently) {
    function fetchQuery(
        operation,
        variables
    ) {
        return Observable.create((sink) => {
            return getAccessTokenSilently({
                audience: 'https://dog-training-staging.herokuapp.com/graphql',
                scope: 'read:viewer',
            }).then(token => {
                // TODO: token error-handling code
                console.log(token);
                fetch('/graphql', {
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
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.errors) {
                            sink.error(data.errors);
                            return;
                        }
                        sink.next(data);
                        sink.complete();
                    });
            });
        });
    }

    installRelayDevTools();

    return new Environment({
        network: Network.create(fetchQuery),
        store: new Store(new RecordSource()),
    });
};
