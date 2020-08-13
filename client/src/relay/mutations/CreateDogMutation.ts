import { graphql } from 'react-relay';
import createCommit from './CommonMutation';
import type { CreateDogInput } from 'generated/graphql';

const mutation = graphql`
    mutation CreateDogMutation($input: CreateDogInput!) {
        createDog(input: $input) {
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

const commit = createCommit<CreateDogInput>(mutation);

export default { commit };
