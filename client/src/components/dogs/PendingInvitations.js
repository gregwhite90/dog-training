import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

function PendingInvitations(props) {
    return (
        <>
            <h3>Pending invitations</h3>
            <ul>
                {props.viewer.pending_invitations_received.edges
                      .map(edge => edge.node)
                      .map(node => {
                          return(
                              <li>Invitation to collaborate training {node.dog.name} as {node.user_role} with {node.invited_by.name} received at {node.invitee_email}.</li>
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
