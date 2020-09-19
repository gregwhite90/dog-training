import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import TrainingSessionDetail from './TrainingSessionDetail';
import TrainingSessionTrainingProgressesRouter from './TrainingSessionTrainingProgressesRouter';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams {
    id: string,
}

interface TrainingSessionRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
}

const TrainingSessionRouter: React.FC<TrainingSessionRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/progress"} render={(p) => (
                <TrainingSessionTrainingProgressesRouter
                    {...p}
                    training_session_id={props.match.params.id}
                    relay={props.relay}
                />
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <TrainingSessionDetail {...p} training_session_id={props.match.params.id} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(TrainingSessionRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
