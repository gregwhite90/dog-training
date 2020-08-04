import { graphql, commitMutation } from 'react-relay';

/**
 * Based on: https://relay.dev/docs/en/mutations#commitmutation
 */

const mutation = graphql`
    mutation EditDogMutation($input: EditDogInput!) {
        editDog(input: $input) {
            dog {
                id
                name
                picture
            }
        }
    }
`;

function commit(
    environment,
    {id, name, picture},
    onCompleted
) {
    console.log(`Called EditDog with ${id}, ${name}, ${picture}`);
    commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: { id, name, picture },
            },
            onCompleted,
        }
    );
}

export default {commit};
