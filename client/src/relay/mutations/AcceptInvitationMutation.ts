import { graphql } from 'react-relay';
import createCommit from './CommonMutation';
import type { AcceptInvitationInput } from 'generated/graphql';

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

const commit = createCommit<AcceptInvitationInput>(mutation);

export default { commit };
