import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { graphql, QueryRenderer } from 'react-relay';

import DogsList from 'components/dogs/DogsList';

import type { PendingInvitationCreatorQuery } from '__generated__/PendingInvitationCreatorQuery.graphql';
import type { RelayProp } from 'react-relay';
import type { RouteComponentProps } from 'react-router-dom';

// TODO: pass down the match params (empty object in this case)
interface PendingInvitationCreatorProps extends RouteComponentProps<{}> {
    relay: RelayProp,
}

const PendingInvitationCreator: React.FC<PendingInvitationCreatorProps> = ({ relay, match }) => {
    // TODO: authenticate if a user tries to access route without being logged in.
    // TODO: route on to more specific routes?
    return (
        <QueryRenderer<PendingInvitationCreatorQuery>
            environment={relay.environment}
            query={graphql`
                query PendingInvitationCreatorQuery {
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
                            <h3>Invite a collaborator for which dog?</h3>
                            <DogsList
                                viewer={props.viewer}
                                match={match}
                                linkSuffix={`/invitations/add`}
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

export default withAuthenticationRequired(PendingInvitationCreator, {
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
