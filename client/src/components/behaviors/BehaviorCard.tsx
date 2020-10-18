import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import ContainerCard from 'components/utils/ContainerCard';
import Table from 'react-bootstrap/Table';

import type { BehaviorCard_behavior } from '__generated__/BehaviorCard_behavior.graphql';
import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';

interface BehaviorCardProps extends HeaderLevelProps {
    behavior: BehaviorCard_behavior,
};

const BehaviorCard: React.FC<BehaviorCardProps> = ({
    behavior,
    headerLevel = 1,
}) => {
    const BehaviorHeaderLevel = `h${headerLevel}` as HeaderLevelType;
    return (
        <ContainerCard fluid="md">
            <BehaviorHeaderLevel>{behavior.name}</BehaviorHeaderLevel>
            <p>{behavior.explanation}</p>
            <Table bordered hover>
                <tbody>
                    {behavior.verbal_command &&
                        (
                            <tr>
                                <td>Verbal command</td>
                                <td>{behavior.verbal_command}</td>
                            </tr>
                        )
                    }
                    {behavior.hand_signal &&
                        (
                            <tr>
                                <td>Hand signal</td>
                                <td>{behavior.hand_signal}</td>
                            </tr>
                        )
                    }
                    {behavior.release_command &&
                        (
                            <tr>
                                <td>Release command</td>
                                <td>{behavior.release_command}</td>
                            </tr>
                        )
                    }
                    {behavior.incentive_description &&
                        (
                            <tr>
                                <td>{behavior.incentive_method || "Incentive"} description</td>
                                <td>{behavior.incentive_description}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </ContainerCard>
    );
}

export default createFragmentContainer(BehaviorCard, {
    behavior: graphql`
        fragment BehaviorCard_behavior on Behavior {
            name
            explanation
            incentive_method
            incentive_description
            verbal_command
            hand_signal
            release_command
        }
    `,
});
