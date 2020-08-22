import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import TrainigStageDetail from './TrainingStageDetail';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams {
    id: string,
}

interface TrainingStageRouterProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
}

const TrainingStageRouter: React.FC<TrainingStageRouterProps> = (props) => {
    return (
        <Switch>
            <Route path={props.match.url + "/"} render={(p) => (
                <TrainingStageDetail {...p} training_stage_id={props.match.params.id} relay={props.relay} />
            )} />
        </Switch>
    );
}

export default withAuthenticationRequired(TrainingStageRouter, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
