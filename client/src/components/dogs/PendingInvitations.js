import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import InvitationAccepter from './InvitationAccepter';

function PendingInvitations(props) {
    return (
        <>
            <h3>Pending invitations</h3>
            <ul>
                {props.viewer.pending_invitations_received.edges
                      .map(edge => edge.node)
                      .map(node => {
                          return(
                              <li key={node.id}>Invitation to collaborate training {node.dog.name} as {node.user_role} with {node.invited_by.name} received at {node.invitee_email}.<InvitationAccepter relay={props.relay} invitation_id={node.id} /></li>
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
