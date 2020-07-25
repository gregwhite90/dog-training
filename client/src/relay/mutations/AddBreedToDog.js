import { graphql, commitMutation } from 'react-relay';

const mutation = graphql`
    mutation AddBreedToDogMutation($input: AddBreedToDogInput!) {
        addBreedToDog(input: $input) {
            dog {
                id
                name
                breeds {
                    edges {
                        node {
                            id
                        }
                    }
                }
            }
        }
    }
`;

function commit(
    environment,
    {dog_id, breed_id}
) {
    return commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: { dog_id, breed_id }
            },
        }
    );
}

export default {commit};
