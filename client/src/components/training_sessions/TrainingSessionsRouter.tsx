import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import TrainingSessionRouter from './TrainingSessionRouter';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface TrainingSessionsRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
}

const TrainingSessionsRouter: React.FC<TrainingSessionsRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/:id"} render={(p) => (
                <TrainingSessionRouter {...p} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(TrainingSessionsRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
