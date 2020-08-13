import { graphql, commitMutation } from 'react-relay';
import type { IEnvironment, PayloadError } from 'relay-runtime';
import type { CreateBehaviorInput } from 'generated/graphql';

/**
 * Based on: https://relay.dev/docs/en/mutations#commitmutation
 */

// TODO: return value should probably be the behavior edge?
const mutation = graphql`
    mutation CreateBehaviorMutation($input: CreateBehaviorInput!) {
        createBehavior(input: $input) {
            behaviorEdge {
                node {
                    id
                    name
                }
            }
        }
    }
`;

function commit(
    environment: IEnvironment,
    input: CreateBehaviorInput,
    onCompleted: (response?: Object, errors?: ReadonlyArray<PayloadError> | null) => void
) {
    console.log(`Called CreateBehavior with ${input}`);
    commitMutation(
        environment,
        {
            mutation,
            variables: {
                input,
            },
            onCompleted
        }
    );
}

export default { commit };
