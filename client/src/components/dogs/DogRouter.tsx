import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import DogDetail from './DogDetail';
import DogBehaviorsRouter from './DogBehaviorsRouter';
import DogTrainingSessionsRouter from './DogTrainingSessionsRouter';
import DogPendingInvitationsRouter from './DogPendingInvitationsRouter';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams {
    id: string,
}

// TODO: fix viewer any type
interface DogRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
}

const DogRouter: React.FC<DogRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/behaviors"} render={(p) => (
                <DogBehaviorsRouter {...p} dog_id={props.match.params.id} relay={props.relay} />
            )} />
            <Route path={props.match.url + "/sessions"} render={(p) => (
                <DogTrainingSessionsRouter {...p} dog_id={props.match.params.id} relay={props.relay} />
            )} />
            <Route path={props.match.url + "/invitations"} render={(p) => (
                <DogPendingInvitationsRouter {...p} dog_id={props.match.params.id} relay={props.relay} />
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <DogDetail {...p} dog_id={props.match.params.id} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(DogRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
