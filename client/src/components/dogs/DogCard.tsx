import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import HorizontalCard from 'components/utils/HorizontalCard';

import type { DogCard_dog } from '__generated__/DogCard_dog.graphql';
import type { UserDogRole } from 'generated/graphql';

interface DogCardProps {
    dog: DogCard_dog,
    role?: UserDogRole,
};

const DogCard: React.FC<DogCardProps> = (props) => {
    console.log('in dog card');
    console.log(props);
    const node = {
        picture: props.dog.picture,
        picture_needs_s3: true,
        title: props.dog.name,
        badge: props.role,
    };
    console.log(node);
    return (<HorizontalCard node={node} />);
}

export default createFragmentContainer(DogCard, {
    dog: graphql`
        fragment DogCard_dog on Dog {
            name
            picture
        }
    `,
});
