import React from 'react';
import {
    Redirect,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

import AcceptInvitationMutation from 'relay/mutations/AcceptInvitationMutation';

export default function InvitationAccepter(props) {
    const { user } = useAuth0();

    return (
        <Button onClick={() => {
                AcceptInvitationMutation.commit(
                    props.relay.environment,
                    {invitation_id: props.invitation_id, user_id: user.user_id},
                );
        }}>
        </Button>
    );
}
