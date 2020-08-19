import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface BehaviorTrainingStagesPageProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    behavior_id: string,
}

const BehaviorTrainingStagesPage: React.FC<BehaviorTrainingStagesPageProps> = (props) => {
    return <div>Placeholder for behavior training stages page</div>;
}

export default withAuthenticationRequired(BehaviorTrainingStagesPage, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
