import { graphql, commitMutation } from 'react-relay';
import type { IEnvironment, PayloadError } from 'relay-runtime';
import type { InviteUserByEmailInput } from 'generated/graphql';

/**
 * Based on: https://relay.dev/docs/en/mutations#commitmutation
 */

const mutation = graphql`
    mutation InviteUserByEmailMutation($input: InviteUserByEmailInput!) {
        inviteUserByEmail(input: $input) {
            viewer {
                id
            }
        }
    }
`;

function commit(
    environment: IEnvironment,
    input: InviteUserByEmailInput,
    onCompleted: (response?: Object, errors?: ReadonlyArray<PayloadError> | null) => void
) {
    console.log(`Called InviteUserByEmail with ${input.invitee_email}, ${input.dog_id}, ${input.user_role}`);
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
