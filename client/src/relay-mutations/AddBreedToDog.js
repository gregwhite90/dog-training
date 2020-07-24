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
    dogId,
    breedId,
) {
    return commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: { dogId, breedId }
            },
        }
    );
}

export default {commit};
