import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import HorizontalCard from 'components/utils/HorizontalCard';

import type { BehaviorCard_behavior } from '__generated__/BehaviorCard_behavior.graphql';

interface BehaviorCardProps {
    behavior: BehaviorCard_behavior,
};

const BehaviorCard: React.FC<BehaviorCardProps> = (props) => {
    const node = {
        title: props.behavior.name,
        text: props.behavior.explanation,
    };
    return (<HorizontalCard node={node} />);
}

export default createFragmentContainer(BehaviorCard, {
    behavior: graphql`
        fragment BehaviorCard_behavior on Behavior {
            name
            explanation
        }
    `,
});
