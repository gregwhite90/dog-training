import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import type { RouteComponentProps } from 'react-router-dom';
import type { RelayProp } from 'react-relay';

interface MatchParams { }

interface BehaviorTrainingStagesPageProps extends RouteComponentProps<MatchParams> {
    relay: RelayProp,
    behavior_id: string,
}

// TODO: only allow for the creation once.
const BehaviorTrainingStagesPage: React.FC<BehaviorTrainingStagesPageProps> = (props) => {
    return (
        <Container>
            <Container>Placeholder for behavior training stages display</Container>
            <Link to={`${props.match.url}/add`}>
                <Button variant="primary">
                    Create training stages
                </Button>
            </Link>
        </Container>
    );
}

export default withAuthenticationRequired(BehaviorTrainingStagesPage, {
    onRedirecting: () => (<div>Redirecting you to the login page</div>)
});
