import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import DogDetail from './DogDetail';
import DogBehaviorsRouter from './DogBehaviorsRouter';

// TODO: figure out passing relay

function DogRouter(props) {
    return (
        <Switch>
            <Route path={props.match.url + "/behaviors"} render={(p) => (
                <DogBehaviorsRouter {...p} relay={props.relay}/>
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <DogDetail {...p} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(DogRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
