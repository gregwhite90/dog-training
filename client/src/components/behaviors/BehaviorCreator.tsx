import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { graphql, QueryRenderer } from 'react-relay';

import Spinner from 'react-bootstrap/Spinner';

import DogsList from 'components/dogs/DogsList';

import type { BehaviorCreatorQuery } from '__generated__/BehaviorCreatorQuery.graphql';
import type { RelayProp } from 'react-relay';
import type { RouteComponentProps } from 'react-router-dom';

import type {
    HeaderLevelProps,
    HeaderLevelType,
} from 'components/utils/HeaderLevels';

// TODO: pass down the match params (empty object in this case)
interface BehaviorCreatorProps extends RouteComponentProps<{}>, HeaderLevelProps {
    relay: RelayProp,
}

const BehaviorCreator: React.FC<BehaviorCreatorProps> = ({
    relay,
    match,
    headerLevel = 1,
}) => {

    const HeaderLevel = `h${headerLevel}` as HeaderLevelType;
    // TODO: authenticate if a user tries to access route without being logged in.
    // TODO: route on to more specific routes?
    return (
        <QueryRenderer<BehaviorCreatorQuery>
            environment={relay.environment}
            query={graphql`
                query BehaviorCreatorQuery {
                    viewer {
                        ...DogsList_viewer
                    }
                }
                `}
            variables={{}}
            render={({ error, props }) => {
                if (props && props.viewer) {
                    return (
                        <>
                            <HeaderLevel>Create a behavior for which dog?</HeaderLevel>
                            <DogsList
                                viewer={props.viewer}
                                match={match}
                                linkSuffix={`/behaviors/add`}
                            />
                        </>
                    );
                } else if (error) {
                    console.log(error);
                    return <div>{error.message}</div>;
                }

                return (
                    <Spinner animation="border" variant="primary">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                );
            }}
        />
    );
}

export default withAuthenticationRequired(BehaviorCreator, {
    onRedirecting: () => (
        <Spinner animation="border" variant="primary">
            <span className="sr-only">Redirecting you to the login page...</span>
        </Spinner>
    )
});
