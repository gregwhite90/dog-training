import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

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
        props && props.viewer && props.viewer.pending_invitations_received && props.viewer.pending_invitations_received.edges
            ? props.viewer.pending_invitations_received.edges.filter(Boolean)
            : [];
    return (
        <>
            <h3>Pending invitations</h3>
            <ul>
                {edges.map(edge => edge!.node)
                    .map(node => {
                        return (
                            <li key={node!.id}>Invitation to collaborate training {node!.dog!.name} as {node!.user_role} with {node!.invited_by!.name} received at {node!.invitee_email}.<InvitationAccepter relay_environment={props.relay_environment} invitation_id={node!.id} /></li>
                        );
                    })
                }
            </ul>
        </>
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
