import { graphql, commitMutation } from 'react-relay';
import type { IEnvironment, PayloadError } from 'relay-runtime';
import type { CreateDogInput } from 'generated/graphql';
/**
 * Based on: https://relay.dev/docs/en/mutations#commitmutation
 */

const mutation = graphql`
    mutation CreateDogMutation($input: CreateDogInput!) {
        createDog(input: $input) {
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
    input: CreateDogInput,
    onCompleted: (response?: Object, errors?: ReadonlyArray<PayloadError> | null) => void
) {
    console.log(`Called CreateDog with ${input.name}, ${input.picture}`);
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
