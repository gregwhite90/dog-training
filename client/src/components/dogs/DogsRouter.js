import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import DogDetail from './DogDetail';
import DogAdder from './DogAdder';
import DogsPage from './DogsPage';

// TODO: figure out passing relay

export default function DogsRouter(props) {
    return (
        <Switch>
            <Route path={props.match.url + "/:id"} render={(p) => (
                <DogDetail {...p} relay={props.relay}/>
            )} />
            <Route path={props.match.url + "/add"} render={(p) => (
                <DogAdder {...p} relay={props.relay} viewer={props.viewer}/>
            )} />
            <Route path={props.match.url + "/"} render={(p) => (
                <DogsPage {...p} relay={props.relay} />
            )} />
        </Switch>
    );
}
