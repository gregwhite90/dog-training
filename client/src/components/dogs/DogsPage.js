import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { graphql, QueryRenderer } from 'react-relay';

import DogsApp from './DogsApp';
import PendingInvitations from './PendingInvitations';

export default function DogsPage({relay, match}) {
    // TODO: authenticate if a user tries to access route without being logged in.
    // TODO: route on to more specific routes?
    return (
        <QueryRenderer
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
            render={({error, props}) => {
                    if (props && props.viewer) {
                        return (
                            <>
                                <DogsApp viewer={props.viewer} match={match}/>
                                <PendingInvitations relay={relay} viewer={props.viewer} />
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
