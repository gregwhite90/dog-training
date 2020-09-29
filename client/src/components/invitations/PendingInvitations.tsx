import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import ContainerCard from 'components/utils/ContainerCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import InvitationAccepter from './InvitationAccepter';

import type { PendingInvitations_viewer } from '__generated__/PendingInvitations_viewer.graphql';
import type { IEnvironment } from 'relay-runtime';

interface PendingInvitationProps {
    viewer: PendingInvitations_viewer,
    relay_environment: IEnvironment,
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
        <Container>
            {edges.map(edge => edge!.node)
                .map(node => {
                    return (
                        <ContainerCard key={node!.id}>
                            <Row>Dog: {node!.dog!.name}</Row>
                            <Row>Role: {node!.user_role}</Row>
                            <Row>From: {node!.invited_by!.name}</Row>
                            <Row>To: {node!.invitee_email}</Row>
                            <Row>
                                <InvitationAccepter
                                    relay_environment={props.relay_environment}
                                    invitation_id={node!.id}
                                />
                            </Row>
                        </ContainerCard>
                    );
                })
            }
        </Container>
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
