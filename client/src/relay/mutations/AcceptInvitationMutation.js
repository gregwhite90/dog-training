import { graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

/**
 * Based on: https://relay.dev/docs/en/mutations#commitmutation
 */

const mutation = graphql`
    mutation AcceptInvitationMutation($input: AcceptInvitationInput!) {
        acceptInvitation(input: $input) {
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
    {invitation_id, user_id},
) {
    console.log(`Called AcceptInvitation with ${invitation_id}, ${user_id}`);
    commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: { invitation_id, user_id },
            },
        }
    );
}

export default {commit};
