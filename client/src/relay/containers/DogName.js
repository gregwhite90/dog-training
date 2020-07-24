import React from "react" // eslint-disable-line no-unused-vars
import { createFragmentContainer, graphql } from "react-relay"

function DogName({dog}) {
    return dog.name;
}

export default createFragmentContainer(DogName, {
    dog: graphql`
        fragment DogName_dog on Dog {
            name
        }
    `,
});
