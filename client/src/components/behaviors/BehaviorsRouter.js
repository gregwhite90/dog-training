import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import BehaviorDetail from './BehaviorDetail';

// TODO: figure out passing relay

function BehaviorsRouter(props) {
    return (
        <Switch>
            <Route path={props.match.url + "/:id"} render={(p) => (
                <BehaviorDetail {...p} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(BehaviorsRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
