import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import DogPendingInvitationCreator from './DogPendingInvitationCreator';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface DogPendingInvitationsRouterProps extends RouteComponentProps<MatchParams> {
    dog_id: string,
    relay: RelayProp,
}

const DogPendingInvitationsRouter: React.FC<DogPendingInvitationsRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/add"} render={(p) => (
                <DogPendingInvitationCreator
                    {...p}
                    dog_id={props.dog_id}
                    relay={props.relay}
                />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(DogPendingInvitationsRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
