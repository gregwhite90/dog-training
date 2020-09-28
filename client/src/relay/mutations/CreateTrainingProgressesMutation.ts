import { graphql } from 'react-relay';
import createCommit from './CommonMutation';
import type { CreateTrainingProgressesInput } from 'generated/graphql';

// TODO: send back more than just ID?
// TODO: allow multiple to be created at once, send back the connection
const mutation = graphql`
    mutation CreateTrainingProgressesMutation($input: CreateTrainingProgressesInput!) {
        createTrainingProgresses(input: $input) {
            trainingStageEdges {
                node {
                    id
                }
                training_progress {
                    seq
                    successes
                    attempts
                    distance
                    distractions
                    duration
                }
            }
        }
    }
`;

const commit = createCommit<CreateTrainingProgressesInput>(mutation);

export default { commit };
