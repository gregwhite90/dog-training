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
    console.log('in dog router');
    console.log(props);
    return (
        <Switch>
            <Route path={props.match.url + "/behaviors"} render={(p) => (
                <DogBehaviorsRouter {...p} dog_id={props.match.params.id} relay={props.relay}/>
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <DogDetail {...p} dog_id={props.match.params.id} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(DogRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
