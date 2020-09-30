import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import BehaviorRouter from './BehaviorRouter';
import BehaviorCreator from './BehaviorCreator';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface BehaviorsRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
}

const BehaviorsRouter: React.FC<BehaviorsRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/add"} render={(p) => (
                <BehaviorCreator {...p} relay={props.relay} />
            )} />
            <Route path={props.match.url + "/:id"} render={(p) => (
                <BehaviorRouter {...p} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(BehaviorsRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
