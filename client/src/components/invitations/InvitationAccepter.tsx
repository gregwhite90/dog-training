import React from 'react';
import {
    Redirect,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

import AcceptInvitationMutation from 'relay/mutations/AcceptInvitationMutation';

import type { IEnvironment } from 'relay-runtime';

interface InvitationAccepterProps {
    relay_environment: IEnvironment;
    invitation_id: string;
};

// TODO: cleaner refresh when accepting an invitation?
const InvitationAccepter: React.FC<InvitationAccepterProps> = (props) => {
    const { user } = useAuth0();

    return (
        <Button variant="primary" onClick={() => {
            AcceptInvitationMutation.commit(
                props.relay_environment,
                { invitation_id: props.invitation_id, user_id: user.sub },
                () => window.location.reload(false),
            );
        }}>
            Accept
        </Button>
    );
}

export default InvitationAccepter;
