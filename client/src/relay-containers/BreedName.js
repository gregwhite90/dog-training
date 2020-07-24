import React from "react"
import { createFragmentContainer, graphql } from "react-relay"

function BreedName({breed}) {
    return <>{breed.name}</>;
}

export default createFragmentContainer(BreedName, {
    breed: graphql`
        fragment BreedName_breed on Breed {
            name
        }
    `,
});
