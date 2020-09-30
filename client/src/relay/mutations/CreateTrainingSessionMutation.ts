import { graphql } from 'react-relay';
import createCommit from './CommonMutation';
import type { CreateTrainingSessionInput } from 'generated/graphql';

const mutation = graphql`
    mutation CreateTrainingSessionMutation($input: CreateTrainingSessionInput!) {
        createTrainingSession(input: $input) {
            trainingSessionEdge {
                node {
                    id
                    start_timestamp
                    minutes_long
                }
            }
        }
    }
`;

const commit = createCommit<CreateTrainingSessionInput>(mutation);

export default { commit };
