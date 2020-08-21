import { graphql } from 'react-relay';
import createCommit from './CommonMutation';
import type { CreateTrainingStagesInput } from 'generated/graphql';

// TODO: send back more than just ID?
// TODO: allow multiple to be created at once, send back the connection
const mutation = graphql`
    mutation CreateTrainingStagesMutation($input: CreateTrainingStagesInput!) {
        createTrainingStages(input: $input) {
            trainingStageEdges {
                node {
                    id
                }
            }
        }
    }
`;

const commit = createCommit<CreateTrainingStagesInput>(mutation);

export default { commit };
