const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} = require('graphql');

const {
    mutationWithClientMutationId,
    fromGlobalId,
} = require('graphql-relay');

const {
    userType,
    userToDogEdge,
    userRoleDescAndType,
    userDogRoleType,
} = require('../types/objects/Nodes');

const {
    AuthUser,
    AuthPendingInvitation,
} = require('../../business-layer/models');

const inviteUserByEmailMutation = mutationWithClientMutationId({
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
            type: new GraphQLNonNull(userDogRoleType),
            description: userRoleDescAndType.description,
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
        // TODO: make sure to use the dog_id correctly
        return pendingInvitation_model
            .create_one({invitee_email, dog_id, user_role})
            .then(_ => {
                const user_model = new AuthUser(context);
                return {user_model};
            });
    },
});

const acceptInvitationMutation = mutationWithClientMutationId({
    name: 'AcceptInvitation',
    description: `Accept an invitation to collaborate training a dog`,
    inputFields: {
        invitation_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        user_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    outputFields: {
        dogEdge: {
            type: new GraphQLNonNull(userToDogEdge),
            resolve: ({dog, user_model}) => {
                return user_model.get_all_dogs_for_viewer().then(dogs => {
                    return {
                        cursor: cursorForObjectInConnection(dogs, dog),
                        node: dog
                    };
                });
            },
        },
        viewer: {
            type: new GraphQLNonNull(userType),
            resolve: ({user_model}) => {
                return user_model.get_viewer();
            },
        }
    },
    mutateAndGetPayload: ({invitation_id, user_id}, context) => {
        // TODO: check that the user_id and email match?
        const pending_invitation_model = new AuthPendingInvitation(context);
        const typeAndId = fromGlobalId(invitation_id);
        // TODO: check that type is PendingInvitation?
        return pending_invitation_model
            .accept_invitation({invitation_id: typeAndId.id, user_id})
            .then(dog_id => {
                const dog_model = new AuthDog(context);
                const dog = dog_model.get_one({id: dog_id}).then(dog => dog);
                const user_model = new AuthUser(context);
                return {dog, user_model};
            });
    },
});

module.exports = {
    inviteUserByEmailMutation,
    acceptInvitationMutation,
}
