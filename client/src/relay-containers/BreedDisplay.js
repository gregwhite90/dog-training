import React from "react"
import { createFragmentContainer, graphql } from "react-relay"

function BreedDisplay({breed}) {
    return (
        <a href={breed.infoLink}>{breed.name}</a>
    );
}

export default createFragmentContainer(BreedDisplay, {
    breed: graphql`
        fragment BreedDisplay_breed on Breed {
            name
            infoUrl
        }
    `,
});
