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
    // Get current user record from the store
    const userProxy = store.get(user.id);

    // Get the user's dog list
    const conn = ConnectionHandler.getConnection(
        userProxy,
        'DogList_dogs',
    );

    // Insert the new dog into the dog list connection
    ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

function commit(
    environment,
    {dog_name, dog_picture},
    user
) {
    return commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: { dog_name, dog_picture }
            },
            updater: (store) => {
                // Get the payload returned from the server
                const payload = store.getRootField('addDog');
                // Get the edge of the newly created record
                const newEdge = payload.getLinkedRecord('dogEdge');
                // Add it to the user's dog list
                sharedUpdater(store, user, newEdge);
            },
            optimisticUpdater: (store) => {
                // Create a Dog record for the store with a temporary ID
                const id = `client:newDog:${tempID++}`;
                const node = store.create(id, 'Dog');
                node.setValue(dog_name, 'name');
                node.setValue(dog_picture, 'picture');
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
