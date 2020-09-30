import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import Dropdown from 'react-bootstrap/Dropdown';
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';

import {
    PlusIcon,
} from '@primer/octicons-react';

import type { AddActions_viewer } from '__generated__/AddActions_viewer.graphql';
import type { IEnvironment } from 'relay-runtime';

interface AddActionsProps {
    viewer: AddActions_viewer,
    relay_environment: IEnvironment,
    margin_within_nav: number,
}

// TODO: figure out if can get rid of the ! everywhere
// TODO: figure out relay situation
const AddActions: React.FC<AddActionsProps> = (props) => {
    const dogEdges =
        props
            && props.viewer
            && props.viewer.dogs
            && props.viewer.dogs.edges
            ? props.viewer.dogs.edges.filter(edge => {
                return edge && (edge.user_role == 'OWNER' || edge.user_role == 'TRAINER')
            })
            : [];
    return (
        <Dropdown
            alignRight={true}
            as={NavItem}
            className={`mr-${props.margin_within_nav}`}
        >
            <Dropdown.Toggle as={NavLink}>
                <PlusIcon size="small" verticalAlign="middle" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/dogs/add">
                    Dog
                </Dropdown.Item>
                {dogEdges.length > 0 &&
                    (
                        <Dropdown>
                            <Dropdown.Toggle as={NavLink}>
                                Behavior
                         </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {dogEdges.map(edge => {
                                    return (
                                        <Dropdown.Item
                                            key={`behavior-${edge!.node!.id}`}
                                            href={`/dogs/${edge!.node!.id}/behaviors/add`}
                                        >
                                            {edge!.node!.name}
                                        </Dropdown.Item>
                                    );
                                })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    )
                }
                {dogEdges.length > 0 &&
                    (
                        <Dropdown>
                            <Dropdown.Toggle as={NavLink}>
                                Training session
                         </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {dogEdges.map(edge => {
                                    return (
                                        <Dropdown.Item
                                            key={`session-${edge!.node!.id}`}
                                            href={`/dogs/${edge!.node!.id}/sessions/add`}
                                        >
                                            {edge!.node!.name}
                                        </Dropdown.Item>
                                    );
                                })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

// TODO: use nested fragments
export default createFragmentContainer(AddActions, {
    viewer: graphql`
        fragment AddActions_viewer on User {
            id
            dogs {
                edges {
                    user_role
                    node {
                        id
                        name
                    }
                }
            }
        }
    `,
});
