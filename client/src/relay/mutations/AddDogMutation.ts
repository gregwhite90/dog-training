import { graphql, commitMutation } from 'react-relay';
import type { IEnvironment, PayloadError } from 'relay-runtime';
import type { AddDogInput } from 'generated/graphql';
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
    environment: IEnvironment,
    input: AddDogInput,
    onCompleted: (response?: Object, errors?: ReadonlyArray<PayloadError> | null) => void
) {
    console.log(`Called AddDog with ${input.name}, ${input.picture}`);
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
