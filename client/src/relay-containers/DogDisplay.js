import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import BreedDisplay from './BreedDisplay';
import DogName from './DogName';

function DogDisplay({dog}) {
    // TODO: fix
    return (
        <>
            <DogName dog={dog} />: {dog.breeds.edges
                                       .map(e => e.node)
                                       .map(breed => <BreedDisplay key={breed.id} breed={breed} />)}
        </>
    );
}

export default createFragmentContainer(DogDisplay, {
    dog: graphql`
        fragment DogDisplay_dog on Dog {
            breeds {
                edges {
                    node {
                        id
                        ...BreedDisplay_breed
                    }
                }
            }
            ...DogName_dog
        }
    `,
});
