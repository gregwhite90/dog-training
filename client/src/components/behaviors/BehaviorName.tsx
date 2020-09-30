import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import type { BehaviorName_behavior } from '__generated__/BehaviorName_behavior.graphql';

interface BehaviorNameProps {
    behavior: BehaviorName_behavior,
};

const BehaviorName: React.FC<BehaviorNameProps> = (props) => {
    return <span>{props.behavior.name}</span>;
}

export default createFragmentContainer(BehaviorName, {
    behavior: graphql`
        fragment BehaviorName_behavior on Behavior {
            name
        }
    `,
});
