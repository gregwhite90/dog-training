import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import HorizontalCard from 'components/utils/HorizontalCard';

function DogCard(props) {
    console.log('in dog card');
    console.log(props);
    const node = {
        picture: props.dog.picture,
        picture_needs_s3: true,
        title: props.dog.name,
        badge: props.role,
    };
    console.log(node);
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
