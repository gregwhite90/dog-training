import React from 'react';
import {
    Redirect,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

import AcceptInvitationMutation from 'relay/mutations/AcceptInvitationMutation';

export default function InvitationAccepter(props) {
    const { user, isAuthenticated } = useAuth0();
    console.log(`In InvitationAccepter with user: ${JSON.stringify(user)}`);

    return (
        <Button onClick={() => {
                AcceptInvitationMutation.commit(
                    props.relay_environment,
                    {invitation_id: props.invitation_id, user_id: user.sub},
                );
        }}>
            Accept invitation!
        </Button>
    );
}
