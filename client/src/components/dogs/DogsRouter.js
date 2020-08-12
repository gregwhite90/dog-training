import React from 'react';
import {
    Switch,
} from 'react-router-dom';
import { ProtectedRoute } from 'components/utils/ProtectedRoute';
import DogDetail from './DogDetail';
import DogAdder from './DogAdder';
import DogsPage from './DogsPage';

// TODO: figure out passing relay

export default function DogsRouter(props) {
    return (
        <Switch>
            <ProtectedRoute path={props.match.url + "/add"} render={(p) => (
                <DogAdder {...p} relay={props.relay} viewer={props.viewer}/>
            )} />
            <ProtectedRoute path={props.match.url + "/:id"} render={(p) => (
                <DogDetail {...p} relay={props.relay}/>
            )} />
            <ProtectedRoute path={props.match.url + "/"} render={(p) => (
                <DogsPage {...p} relay={props.relay} />
            )} />
        </Switch>
    );
}
