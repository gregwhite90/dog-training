import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import HorizontalCard from '../../react-components/utils/HorizontalCard';

function DogCard(props) {
    const node = {
        picture: props.dog.picture,
        picture_needs_s3: true,
        title: props.dog.name,
    };
    return (<HorizontalCard node={node}/>);
}

export default createFragmentContainer(DogCard, {
    dog: graphql`
        fragment DogCard_dog on Dog {
            name
            picture
        }
    `,
});
