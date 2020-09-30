import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import DogRouter from './DogRouter';
import DogAdder from './DogAdder';
import DogsPage from './DogsPage';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

// TODO: fix viewer any type
interface DogsRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    viewer: any,
}

const DogsRouter: React.FC<DogsRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/add"} render={(p) => (
                <DogAdder {...p} relay={props.relay} viewer={props.viewer} />
            )} />
            <Route path={props.match.url + "/:id"} render={(p) => (
                <DogRouter {...p} relay={props.relay} />
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
