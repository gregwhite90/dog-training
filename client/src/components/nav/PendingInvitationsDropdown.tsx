import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import PendingInvitations from 'components/invitations/PendingInvitations';

import type { PendingInvitationsDropdownQuery } from '__generated__/PendingInvitationsDropdownQuery.graphql';
import type { RelayProp } from 'react-relay';

// TODO: pass down the match params (empty object in this case)
interface PendingInvitationsDropdownProps {
    relay: RelayProp,
    margin_within_nav: number,
}

const PendingInvitationsDropdown: React.FC<PendingInvitationsDropdownProps> = ({ relay, margin_within_nav }) => {
    // TODO: authenticate if a user tries to access route without being logged in.
    // TODO: route on to more specific routes?
    return (
        <QueryRenderer<PendingInvitationsDropdownQuery>
            environment={relay.environment}
            query={graphql`
                query PendingInvitationsDropdownQuery {
                    viewer {
                        ...PendingInvitations_viewer
                    }
                }
                `}
            cacheConfig={{
                poll: 600000 // 10 minutes
            }}
            variables={{}}
            render={({ error, props }) => {
                if (props && props.viewer) {
                    return (
                        <PendingInvitations
                            relay_environment={relay.environment}
                            viewer={props.viewer}
                            margin_within_nav={margin_within_nav}
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

export default PendingInvitationsDropdown;
