import { graphql, commitMutation } from 'react-relay';

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
    environment,
    input,
    onCompleted
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

export default {commit};
