import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import ContainerCard from 'components/utils/ContainerCard';
import Table from 'react-bootstrap/Table';

import type { BehaviorCard_behavior } from '__generated__/BehaviorCard_behavior.graphql';

interface BehaviorCardProps {
    behavior: BehaviorCard_behavior,
};

const BehaviorCard: React.FC<BehaviorCardProps> = (props) => {
    return (
        <ContainerCard fluid="md">
            <h3>{props.behavior.name}</h3>
            <p>{props.behavior.explanation}</p>
            <Table bordered hover>
                <tbody>
                    {props.behavior.verbal_command &&
                        (
                            <tr>
                                <td>Verbal command</td>
                                <td>{props.behavior.verbal_command}</td>
                            </tr>
                        )
                    }
                    {props.behavior.hand_signal &&
                        (
                            <tr>
                                <td>Hand signal</td>
                                <td>{props.behavior.hand_signal}</td>
                            </tr>
                        )
                    }
                    {props.behavior.release_command &&
                        (
                            <tr>
                                <td>Release command</td>
                                <td>{props.behavior.release_command}</td>
                            </tr>
                        )
                    }
                    {props.behavior.incentive_description &&
                        (
                            <tr>
                                <td>{props.behavior.incentive_method || "Incentive"} description</td>
                                <td>{props.behavior.incentive_description}</td>
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
