const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLEnumType,
} = require('graphql');

const {
    nodeDefinitions,
    fromGlobalId,
    globalIdField,
    connectionArgs,
    connectionDefinitions,
    connectionFromPromisedArray,
} = require('graphql-relay');

const {
    AuthUser,
    AuthDog,
    AuthPendingInvitation,
} = require('../../../business-layer/models');

const { nodeInterface, nodeField } = nodeDefinitions(
    // Resolve a global ID to its object
    (globalID, context) => {
        const { type, id } = fromGlobalId(globalID);
        let model;
        switch (type) {
            case 'User':
                model = new AuthUser(context);
                break;
            case 'Dog':
                model = new AuthDog(context);
                break;
            case 'PendingInvitation':
                model = new AuthPendingInvitation(context);
                break;
            default:
                console.log(`Unknown type in node resolver: ${type}`);
                break;
        }
        return model.get_one({id});
    },
    // TODO: Believe may be possible to have each type resolve its own type.
    // otherwise, need to put an resolveType here
    (obj) => {
        switch (obj._node_type) {
            case 'User':
                return userType;
            case 'Dog':
                return dogType;
            case 'PendingInvitation':
                return pendingInvitationType;
            default:
                console.log(`Unknown obj in obj -> type node resolver: ${obj}`);
                break;
        }
    },
);

/**
 * Concrete types implementing Node
 */
const userType = new GraphQLObjectType({
    name: 'User',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        picture: {
            type: GraphQLString,
            description: 'URL of the profile image of this user.',
        },
        dogs: {
            type: userToDogConnection,
            args: connectionArgs,
            resolve: (user, args, context) => {
                const user_model = new AuthUser(context);
                return connectionFromPromisedArray(user_model.get_all_dogs({id: user.id}), args);
            },
        },
        pending_invitations_sent: {
            type: pendingInvitationConnection,
            args: connectionArgs,
            resolve: (user, args, context) => {
                const pending_invitation_model = new AuthPendingInvitation(context);
                return connectionFromPromisedArray(
                    pending_invitation_model.get_all_sent({id: user.id}), args
                );
            },
        },
        pending_invitations_received: {
            type: pendingInvitationConnection,
            args: connectionArgs,
            // TODO: don't use the context for the user's email?
            resolve: (_, args, context) => {
                const pending_invitation_model = new AuthPendingInvitation(context);
                return connectionFromPromisedArray(
                    pending_invitation_model.get_all_received({email: context.user.email}), args
                );
            }
        },
        /**
        training_sessions: {
            type: new GraphQLNonNull(userToTrainingSessionConnection),
            args: connectionArgs,
            // TODO: actually implement resolver
        },
        */
    }),
});

const dogTypeOwnedScalarFields = {
    name: {
        type: new GraphQLNonNull(GraphQLString),
    },
    picture: {
        type: GraphQLString,
        description: 'URL of the profile image of this dog.'
    },
};

const dogType = new GraphQLObjectType({
    name: 'Dog',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        users: {
            type: dogToUserConnection,
            args: connectionArgs,
            resolve: (dog, args, context) => {
                const dog_model = new AuthDog(context);
                // TODO: turn into getting all user ids
                return connectionFromPromisedArray(
                    dog_model.get_all_users({id: dog.id}),
                    args
                );
            },
        },
        ...dogTypeOwnedScalarFields,
    }),
});

const userDogRoleType = new GraphQLEnumType({
    name: 'UserDogRole',
    values: {
        OWNER: { value: 'OWNER' },
        TRAINER: { value: 'TRAINER' },
        VIEWER: { value: 'VIEWER' },
    }
});

const userRoleDescAndType = {
    description: 'The role the user plays for the dog.',
    type: userDogRoleType,
};

const { connectionType: dogToUserConnection } = connectionDefinitions({
    name: 'DogToUser',
    nodeType: userType,
    resolveNode: (edge, args, context) => {
        const user_model = new AuthUser(context);
        return user_model.get_one({id: edge.node.user_id});
    },
    edgeFields: () => ({
        user_role: {
            ...userRoleDescAndType,
            resolve: (edge) => {
                console.log('in dog to user edge resolver');
                console.log(edge);
                return edge.node.user_role;
            },
        },
    }),
});

const { connectionType: userToDogConnection, edgeType: userToDogEdge } = connectionDefinitions({
    name: 'UserToDog',
    nodeType: dogType,
    resolveNode: (edge, args, context) => {
        console.log('in user to dog node resolver');
        console.log(edge);
        const dog_model = new AuthDog(context);
        return dog_model.get_one({id: edge.node.dog_id});
    },
    edgeFields: () => ({
        user_role: {
            ...userRoleDescAndType,
            resolve: (edge) => {
                console.log('in user to dog edge resolver');
                console.log(edge);
                return edge.node.user_role;
            },
        },
    }),
});

const pendingInvitationType = new GraphQLObjectType({
    name: 'PendingInvitation',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        invitee_email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        invited_by: {
            type: new GraphQLNonNull(userType),
            resolve: (pending_invitation, args, context) => {
                const user_model = new AuthUser(context);
                return user_model.get_one({id: pending_invitation.invited_by});
            }
        },
        user_role: {
            type: new GraphQLNonNull(userDogRoleType),
        },
    }),
});

const { connectionType: pendingInvitationConnection,
        edgeType: pendingInvitationEdge
} = connectionDefinitions({
    name: 'PendingInvitation',
    nodeType: pendingInvitationType,
    resolveNode: (edge, args, context) => {
        const pending_invitation_model = new AuthPendingInvitation(context);
        // TODO: figure out return value
        return pending_invitation_model.get_one({id: edge.node.id});
    },
    // TODO: decide if anything should go on the edge.
});

module.exports = {
    dogType,
    dogTypeOwnedScalarFields,
    userType,
    nodeField,
    userToDogEdge,
    pendingInvitationType,
};
