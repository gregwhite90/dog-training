import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import HorizontalCard from '../../react-components/utils/HorizontalCard';

function DogCard({dog}) {
    const node = {
        picture: dog.picture,
        title: dog.name,
    };
    return (
        <HorizontalCard node={node}/>
    );
}

export default createFragmentContainer(DogCard, {
    dog: graphql`
        fragment DogCard_dog on Dog {
            name
            picture
        }
    `,
});
