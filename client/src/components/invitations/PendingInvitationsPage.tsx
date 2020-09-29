import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import PendingInvitations from './PendingInvitations';

import type { PendingInvitationsPageQuery } from '__generated__/PendingInvitationsPageQuery.graphql';
import type { RelayProp } from 'react-relay';

// TODO: pass down the match params (empty object in this case)
interface PendingInvitationsPageProps {
    relay: RelayProp,
}

const PendingInvitationsPage: React.FC<PendingInvitationsPageProps> = ({ relay }) => {
    // TODO: authenticate if a user tries to access route without being logged in.
    // TODO: route on to more specific routes?
    return (
        <QueryRenderer<PendingInvitationsPageQuery>
            environment={relay.environment}
            query={graphql`
                query PendingInvitationsPageQuery {
                    viewer {
                        ...PendingInvitations_viewer
                    }
                }
                `}
            cacheConfig={{
                poll: 60000 // 60 seconds
            }}
            variables={{}}
            render={({ error, props }) => {
                if (props && props.viewer) {
                    return (
                        <PendingInvitations
                            relay_environment={relay.environment}
                            viewer={props.viewer}
                        />
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

export default PendingInvitationsPage;
