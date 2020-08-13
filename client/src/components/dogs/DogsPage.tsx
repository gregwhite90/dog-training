import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { graphql, QueryRenderer } from 'react-relay';

import DogsApp from './DogsApp';
import PendingInvitations from './PendingInvitations';

import type { DogsPageQuery } from '__generated__/DogsPageQuery.graphql';
import type { IEnvironment } from 'relay-runtime';
import type { RouteComponentProps } from 'react-router-dom';

// TODO: pass down the match params (empty object in this case)
interface DogsPageProps extends RouteComponentProps<{}> {
    relay: {
        environment: IEnvironment,
    },
}

const DogsPage: React.FC<DogsPageProps> = ({ relay, match }) => {
    // TODO: authenticate if a user tries to access route without being logged in.
    // TODO: route on to more specific routes?
    return (
        <QueryRenderer<DogsPageQuery>
            environment={relay.environment}
            query={graphql`
                query DogsPageQuery {
                    viewer {
                        ...DogsApp_viewer
                        ...PendingInvitations_viewer
                    }
                }
                `}
            cacheConfig={{
                poll: 10000 // 10 seconds
            }}
            variables={{}}
            render={({ error, props }) => {
                if (props && props.viewer) {
                    return (
                        <>
                            <DogsApp viewer={props.viewer} match={match} />
                            <PendingInvitations relay_environment={relay.environment} viewer={props.viewer} />
                        </>
                    );
                } else if (error) {
                    console.log(error);
                    return <div>error.message</div>;
                }

                return <div>Loading...</div>;
            }}
        />
    );
}

export default withAuthenticationRequired(DogsPage, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
