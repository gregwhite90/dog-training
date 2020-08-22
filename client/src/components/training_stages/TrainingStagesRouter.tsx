import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import TrainingStageRouter from './TrainingStageRouter';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface TrainingStagesRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
}

const TrainingStagesRouter: React.FC<TrainingStagesRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/:id"} render={(p) => (
                <TrainingStageRouter {...p} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(TrainingStagesRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
