import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

/**
 * Based on: https://relay.dev/docs/en/mutations#commitmutation
 */

const mutation = graphql`
    mutation AddDogMutation($input: AddDogInput!) {
        addDog(input: $input) {
            dogEdge {
                node {
                    id
                    name
                    picture
                }
            }
        }
    }
`;

function sharedUpdater(store, newEdge) {
    console.log('in shared updater');
    // Get current user record from the store
    const viewerProxy = store.getRootField('viewer');
    console.log(`viewerProxy type: ${viewerProxy.getType()}`);
    console.log(`viewerProxy dataID: ${viewerProxy.getDataID()}`);

    // Get the user's dog list
    const conn = ConnectionHandler.getConnection(
        viewerProxy,
        'DogsList_dogs',
    );
    console.log(`Connection gotten`);

    // Insert the new dog into the dog list connection
    ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

function commit(
    environment,
    {name, picture},
    updateStateCallback
) {
    console.log(`Called commit with ${name}, ${picture}`);
    commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: { name, picture },
            },
            updater: (store) => {
                console.log('in updater');
                // Get the payload returned from the server
                const payload = store.getRootField('addDog');
                // Get the edge of the newly created record
                const newEdge = payload.getLinkedRecord('dogEdge');
                // Add it to the viewer's dog list
                sharedUpdater(store, newEdge);

                updateStateCallback();
            },
            optimisticUpdater: (store) => {
                console.log('in optimistic updater');
                // Create a Dog record for the store with a temporary ID
                const id = `client:newDog:${tempID++}`;
                const node = store.create(id, 'Dog');
                node.setValue(name, 'name');
                node.setValue(picture, 'picture');
                node.setValue(id, 'id');
                node.setValue('Dog', '_node_type');

                // Create a new edge that contains the newly created Dog
                const newEdge = store.create(
                    `client:newEdge:${tempID++}`,
                    'UserToDogEdge',
                );
                newEdge.setLinkedRecord(node, 'node');

                // Add to the viewer's dog list
                sharedUpdater(store, newEdge);
            },
        }
    );
}

export default {commit};
