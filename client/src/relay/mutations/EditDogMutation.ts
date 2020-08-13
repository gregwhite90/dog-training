import { graphql, commitMutation } from 'react-relay';
import type { IEnvironment, PayloadError } from 'relay-runtime';
import type { EditDogInput } from 'generated/graphql';

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
    environment: IEnvironment,
    input: EditDogInput,
    onCompleted: (response?: Object, errors?: ReadonlyArray<PayloadError> | null) => void
) {
    console.log(`Called EditDog with ${input.id}, ${input.name}, ${input.picture}`);
    commitMutation(
        environment,
        {
            mutation,
            variables: {
                input,
            },
            onCompleted,
        }
    );
}

export default { commit };
