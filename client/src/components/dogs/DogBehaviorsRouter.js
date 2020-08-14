import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import DogBehaviorsPage from './DogBehaviorsPage';
import DogBehaviorCreator from './DogBehaviorCreator';

// TODO: figure out passing relay

function DogBehaviorsRouter(props) {
    return (
        <Switch>
            <Route path={props.match.url + "/add"} render={(p) => (
                <DogBehaviorCreator {...p} relay={props.relay} />
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <DogBehaviorsPage {...p} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(DogBehaviorsRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
