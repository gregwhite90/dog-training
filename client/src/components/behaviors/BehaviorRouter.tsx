import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import BehaviorDetail from './BehaviorDetail';
import BehaviorTrainingStagesRouter from './BehaviorTrainingStagesRouter';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams {
    id: string,
}

interface BehaviorRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
}

const BehaviorRouter: React.FC<BehaviorRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/stages"} render={(p) => (
                <BehaviorTrainingStagesRouter {...p} behavior_id={props.match.params.id} relay={props.relay} />
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <BehaviorDetail {...p} behavior_id={props.match.params.id} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(BehaviorRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
