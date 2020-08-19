import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import DogBehaviorsPage from './DogBehaviorsPage';
import DogBehaviorCreator from './DogBehaviorCreator';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface DogBehaviorsRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    dog_id: string,
}

const DogBehaviorsRouter: React.FC<DogBehaviorsRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/add"} render={(p) => (
                <DogBehaviorCreator {...p} dog_id={props.dog_id} relay={props.relay} />
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <DogBehaviorsPage {...p} dog_id={props.dog_id} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(DogBehaviorsRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
