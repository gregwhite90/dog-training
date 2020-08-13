import { graphql } from 'react-relay';
import createCommit from './CommonMutation';
import type { EditDogInput } from 'generated/graphql';

const mutation = graphql`
    mutation EditDogMutation($input: EditDogInput!) {
        editDog(input: $input) {
            dog {
                id
                name
                picture
            }
        }
    }
`;

const commit = createCommit<EditDogInput>(mutation);

export default { commit };
