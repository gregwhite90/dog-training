import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import DogDetail from './DogDetail';
import DogAdder from './DogAdder';
import DogsPage from './DogsPage';
import DogBehaviorsPage from './DogBehaviorsPage';

// TODO: figure out passing relay

function DogsRouter(props) {
    return (
        <Switch>
            <Route path={props.match.url + "/add"} render={(p) => (
                <DogAdder {...p} relay={props.relay} viewer={props.viewer}/>
            )} />
            <Route path={props.match.url + "/:id/behaviors"} render={(p) => (
                <DogBehaviorsPage {...p} relay={props.relay}/>
            )} />
            <Route path={props.match.url + "/:id"} render={(p) => (
                <DogDetail {...p} relay={props.relay}/>
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <DogsPage {...p} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(DogsRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
