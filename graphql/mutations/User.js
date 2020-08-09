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
    AuthDog,
    AuthPendingInvitation,
} = require('../../business-layer/models');

const { sendInvitation } = require('../../sendgrid');

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
    mutateAndGetPayload: async ({invitee_email, dog_id, user_role}, context) => {
        const user_model = new AuthUser(context);
        const dog_model = new AuthDog(context);
        const dogTypeAndId = fromGlobalId(dog_id);
        // TODO: could check for email_verified
        const users = await user_model.get_all_by_email({email: invitee_email});
        const user_email_exists = users.length >= 1;
        if (!user_email_exists) {
            // Send an email invite
            // TODO: clean up this horrific nesting?
            const user = await user_model.get_viewer();
            const dog = await dog_model.get_one({id: dogTypeAndId.id});
            // TODO: send asynchronously without awaiting?
            sendInvitation({user, dog, invitee: invitee_email});
        }
        // TODO: check for dog type
        // TODO: decide about return value
        const pending_invitation_model = new AuthPendingInvitation(context);
        await pending_invitation_model.create_one({invitee_email, dog_id: dogTypeAndId.id, user_role});
        return {user_model};
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
