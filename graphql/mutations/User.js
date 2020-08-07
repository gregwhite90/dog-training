const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} = require('graphql');

const {
    mutationWithClientMutationId,
} = require('graphql-relay');

const {
    userType,
    userRoleDescAndType,
} = require('../types/objects/Nodes');

const {
    AuthUser,
    AuthPendingInvitation,
} = require('../../business-layer/models');

const inviteUserByEmail = mutationWithClientMutationId({
    name: 'InviteUserByEmail',
    description: `Invite an email address to collaborate training a dog`,
    inputFields: {
        invitee_email: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The email address of the user to invite',
        },
        dog_id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The ID of the dog to invite the user to collaborate to train',
        },
        user_role: {
            ...userRoleDescAndType,
        },
    },
    outputFields: {
        viewer: {
            type: new GraphQLNonNull(userType),
            resolve: ({user_model}) => {
                return user_model.get_viewer();
            },
        }
    },
    mutateAndGetPayload: ({invitee_email, dog_id, user_role}, context) => {
        const pending_invitation_model = new AuthPendingInvitation(context);
        // TODO: implement actual mutation
        return pendingInvitation_model
            .create_one({invitee_email, dog_id, user_role})
            .then(_ => {
                const user_model = new AuthUser(context);
                return {user_model};
            });
    },
});

module.exports = {
    inviteUserByEmail,
}
