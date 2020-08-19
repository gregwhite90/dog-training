import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import BehaviorTrainingStagesPage from './BehaviorTrainingStagesPage';
import BehaviorTrainingStagesCreator from './BehaviorTrainingStagesCreator';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface BehaviorTrainingStagesRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    behavior_id: string,
}

const BehaviorTrainingStagesRouter: React.FC<BehaviorTrainingStagesRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/add"} render={(p) => (
                <BehaviorTrainingStagesCreator {...p} behavior_id={props.behavior_id} relay={props.relay} />
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <BehaviorTrainingStagesPage {...p} behavior_id={props.behavior_id} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(BehaviorTrainingStagesRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
