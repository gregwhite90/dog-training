import { graphql, commitMutation } from 'react-relay';

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
    environment,
    {invitee_email, dog_id, user_role},
    onCompleted
) {
    console.log(`Called InviteUserByEmail with ${invitee_email}, ${dog_id}, ${user_role}`);
    commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: { invitee_email, dog_id, user_role },
            },
            onCompleted
        }
    );
}

export default {commit};
