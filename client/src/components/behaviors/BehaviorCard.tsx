import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import type { BehaviorCard_behavior } from '__generated__/BehaviorCard_behavior.graphql';

interface BehaviorCardProps {
    behavior: BehaviorCard_behavior,
};

const BehaviorCard: React.FC<BehaviorCardProps> = (props) => {
    const node = {
        title: props.behavior.name,
        text: props.behavior.explanation,
    };
    return (
        <Container fluid="md" className="p-3 mb-3 border rounded">
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
                    {props.behavior.lure_description &&
                        (
                            <tr>
                                <td>Lure description</td>
                                <td>{props.behavior.lure_description}</td>
                            </tr>
                        )
                    }
                    {props.behavior.shape_description &&
                        (
                            <tr>
                                <td>Shape description</td>
                                <td>{props.behavior.shape_description}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default createFragmentContainer(BehaviorCard, {
    behavior: graphql`
        fragment BehaviorCard_behavior on Behavior {
            name
            explanation
            lure_description
            shape_description
            verbal_command
            hand_signal
            release_command
        }
    `,
});
