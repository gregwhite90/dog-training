import { commitMutation } from 'react-relay';
import type { GraphQLTaggedNode } from 'react-relay';
import type { IEnvironment, PayloadError } from 'relay-runtime';

// TODO, also generic the response type?
export default function createCommit<MutationInputType>(
    mutation: GraphQLTaggedNode
) {
    return (
        environment: IEnvironment,
        input: MutationInputType,
        onCompleted: (response?: Object, errors?: ReadonlyArray<PayloadError> | null) => void
    ) => {
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
}
