import { graphql } from 'react-relay';
import createCommit from './CommonMutation';
import type { InviteUserByEmailInput } from 'generated/graphql';

const mutation = graphql`
    mutation InviteUserByEmailMutation($input: InviteUserByEmailInput!) {
        inviteUserByEmail(input: $input) {
            viewer {
                id
            }
        }
    }
`;

const commit = createCommit<InviteUserByEmailInput>(mutation);

export default { commit };
