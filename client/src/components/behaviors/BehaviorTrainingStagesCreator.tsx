import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface BehaviorTrainingStagesCreatorProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    behavior_id: string,
}

const BehaviorTrainingStagesCreator: React.FC<BehaviorTrainingStagesCreatorProps> = (props) => {
    return <div>Placeholder for behavior training stages creation flow</div>;
}

export default withAuthenticationRequired(BehaviorTrainingStagesCreator, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
