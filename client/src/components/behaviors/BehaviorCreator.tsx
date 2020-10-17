import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { graphql, QueryRenderer } from 'react-relay';

import DogsList from 'components/dogs/DogsList';

import type { BehaviorCreatorQuery } from '__generated__/BehaviorCreatorQuery.graphql';
import type { RelayProp } from 'react-relay';
import type { RouteComponentProps } from 'react-router-dom';

// TODO: pass down the match params (empty object in this case)
interface BehaviorCreatorProps extends RouteComponentProps<{}> {
    relay: RelayProp,
}

const BehaviorCreator: React.FC<BehaviorCreatorProps> = ({ relay, match }) => {
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
                            <h3>Create a behavior for which dog?</h3>
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

                return <div>Loading...</div>;
            }}
        />
    );
}

export default withAuthenticationRequired(BehaviorCreator, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});