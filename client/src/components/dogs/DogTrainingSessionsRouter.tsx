import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import DogTrainingSessionsPage from './DogTrainingSessionsPage';
import DogTrainingSessionCreator from './DogTrainingSessionCreator';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface DogTrainingSessionsRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    dog_id: string,
}

const DogTrainingSessionsRouter: React.FC<DogTrainingSessionsRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/add"} render={(p) => (
                <DogTrainingSessionCreator {...p} dog_id={props.dog_id} relay={props.relay} />
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <DogTrainingSessionsPage {...p} dog_id={props.dog_id} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(DogTrainingSessionsRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
