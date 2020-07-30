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

function sharedUpdater(store, user, newEdge) {
    console.log('in shared updater');
    // Get current user record from the store
    const userProxy = store.get(user.id);
    console.log(`userProxy type: ${userProxy.getType()}`);
    console.log(`userProxy dataID: ${userProxy.getDataID()}`);

    // Get the user's dog list
    const conn = ConnectionHandler.getConnection(
        userProxy,
        'DogList_dogs',
    );
    console.log(`Connection `);

    // Insert the new dog into the dog list connection
    ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

function commit(
    environment,
    {name, picture},
    user, // TODO: this is just an ID right now
    updateStateCallback
) {
    console.log(`Called commit with ${name}, ${picture}`);
    console.log(user);
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
                // Add it to the user's dog list
                sharedUpdater(store, user, newEdge);

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
                    'DogEdge',
                );
                newEdge.setLinkedRecord(node, 'node');

                // Add to the user's dog list
                sharedUpdater(store, user, newEdge);
            },
        }
    );
}

export default {commit};
