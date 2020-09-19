import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import TrainingSessionTrainingProgressesPage from './TrainingSessionTrainingProgressesPage';
import TrainingSessionTrainingProgressesCreator from './TrainingSessionTrainingProgressesCreator';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface TrainingSessionTrainingProgressesRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    training_session_id: string,
}

const TrainingSessionTrainingProgressesRouter: React.FC<TrainingSessionTrainingProgressesRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/add"} render={(p) => (
                <TrainingSessionTrainingProgressesCreator
                    {...p}
                    training_session_id={props.training_session_id}
                    relay={props.relay}
                />
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <TrainingSessionTrainingProgressesPage
                    {...p}
                    training_session_id={props.training_session_id}
                    relay={props.relay}
                />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(TrainingSessionTrainingProgressesRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
