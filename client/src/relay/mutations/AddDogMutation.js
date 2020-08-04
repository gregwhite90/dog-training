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
            viewer {
                id
            }
        }
    }
`;

function commit(
    environment,
    {name, picture},
    viewer,
    onCompleted
) {
    console.log(`Called AddDog with ${name}, ${picture}`);
    commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: { name, picture },
            },
            onCompleted,
        }
    );
}

export default {commit};
