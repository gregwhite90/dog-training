import { graphql } from 'react-relay';
import createCommit from './CommonMutation';
import type { CreateBehaviorInput } from 'generated/graphql';

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

const commit = createCommit<CreateBehaviorInput>(mutation);

export default { commit };
