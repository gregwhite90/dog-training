import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import ContainerCard from 'components/utils/ContainerCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import NavLink from 'react-bootstrap/NavLink';
import NavItem from 'react-bootstrap/NavItem';
import Badge from 'react-bootstrap/Badge';

import {
    PeopleIcon,
} from '@primer/octicons-react';

import InvitationAccepter from './InvitationAccepter';

import type { PendingInvitations_viewer } from '__generated__/PendingInvitations_viewer.graphql';
import type { IEnvironment } from 'relay-runtime';

interface PendingInvitationProps {
    viewer: PendingInvitations_viewer,
    relay_environment: IEnvironment,
    margin_within_nav: number,
}

// TODO: figure out if can get rid of the ! everywhere
// TODO: figure out relay situation
const PendingInvitations: React.FC<PendingInvitationProps> = (props) => {
    const edges =
        props
            && props.viewer
            && props.viewer.pending_invitations_received
            && props.viewer.pending_invitations_received.edges
            ? props.viewer.pending_invitations_received.edges.filter(Boolean)
            : [];
    return (
        <Dropdown
            alignRight={true}
            as={NavItem}
            className={`mr-${props.margin_within_nav}`}
        >
            <Dropdown.Toggle as={NavLink}>
                <>
                    <PeopleIcon size="small" verticalAlign="middle" />
                    {edges.length > 0 &&
                        (
                            <>
                                {' '}
                                <Badge variant="primary">
                                    {edges.length}
                                </Badge>
                            </>
                        )
                    }
                </>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/invitations/add">
                    Send an invitation
                </Dropdown.Item>
                {edges.length > 0 &&
                    (
                        <>
                            <Dropdown.Divider />
                            <Dropdown.Header>
                                Pending invitations recieved
                             </Dropdown.Header>
                            {edges.map(edge => {
                                return (
                                    <ContainerCard key={edge!.node!.id}>
                                        <Row><Col>Dog: {edge!.node!.dog!.name}</Col></Row>
                                        <Row><Col>Role: {edge!.node!.user_role}</Col></Row>
                                        <Row><Col>From: {edge!.node!.invited_by!.name}</Col></Row>
                                        <Row><Col>To: {edge!.node!.invitee_email}</Col></Row>
                                        <Row><Col>
                                            <InvitationAccepter
                                                relay_environment={props.relay_environment}
                                                invitation_id={edge!.node!.id}
                                            />
                                        </Col></Row>
                                    </ContainerCard>
                                );
                            })
                            }
                        </>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

// TODO: use nested fragments
export default createFragmentContainer(PendingInvitations, {
    viewer: graphql`
        fragment PendingInvitations_viewer on User {
            id
            pending_invitations_received {
                edges {
                    node {
                        id
                        invitee_email
                        user_role
                        dog {
                            name
                            picture
                            id
                        }
                        invited_by {
                            name
                        }
                    }
                }
            }
        }
    `,
});
