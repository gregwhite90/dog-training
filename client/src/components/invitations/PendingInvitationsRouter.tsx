import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import PendingInvitationCreator from './PendingInvitationCreator';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface PendingInvitationsRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
}

const PendingInvitationsRouter: React.FC<PendingInvitationsRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/add"} render={(p) => (
                <PendingInvitationCreator {...p} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(PendingInvitationsRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
