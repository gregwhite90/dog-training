import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import BreedName from './BreedName';

function BreedDisplay({breed}) {
    return (
        <a href={breed.infoUrl}><BreedName breed={breed} /></a>
    );
}

export default createFragmentContainer(BreedDisplay, {
    breed: graphql`
        fragment BreedDisplay_breed on Breed {
            infoUrl
            ...BreedName_breed
        }
    `,
});
