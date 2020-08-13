import { graphql, commitMutation } from 'react-relay';
import type { IEnvironment } from 'relay-runtime';
import type { AcceptInvitationInput } from 'generated/graphql';
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
    environment: IEnvironment,
    input: AcceptInvitationInput,
) {
    console.log(`Called AcceptInvitation with ${input.invitation_id}, ${input.user_id}`);
    commitMutation(
        environment,
        {
            mutation,
            variables: {
                input
            },
        }
    );
}

export default { commit };
