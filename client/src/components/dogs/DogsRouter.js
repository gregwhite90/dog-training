import React from 'react';
import {
    Route,
} from 'react-router-dom';
import DogDetail from './DogDetail';
import DogAdder from './DogAdder';
import DogsPage from './DogsPage';

// TODO: figure out passing relay

const DogsRouter = ({ match }) => (
    <Switch>
        <Route path={match.url + "/:id"} component={DogDetail} />
        <Route path={match.url + "/add"} component={DogAdder} />
        <Route path={match.url + "/"} component={DogsPage} />
    </Switch>
);
