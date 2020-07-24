import { graphql, commitMutation } from 'react-relay';

const mutation = graphql`
    mutation IntroduceHumanMutation($input: IntroduceHumanInput!) {
        introduceHuman(input: $input) {
            human {
                name
                id
            }
        }
    }
`;

function commit(
    environment,
    humanName,
) {
    return commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: { name: humanName }
            },
        }
    );
}

export default {commit};
