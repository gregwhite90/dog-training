const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

const {
    nodeDefinitions,
    fromGlobalId,
    globalIdField,
    connectionArgs,
    connectionFromPromisedArray,
} = require('graphql-relay');

const {
    dogToUserConnection,
    userToDogConnection,
} = require('../connections/UserDog');

const {
    AuthUser,
    AuthDog,
} = require('../../../business-layer/models');

const { nodeInterface, nodeField } = nodeDefinitions(
    // Resolve a global ID to its object
    (globalID, context) => {
        const { type, id } = fromGlobalId(globalID);
        switch (type) {
            case 'User':
                return AuthUser(context).get_one({id});
            case 'Dog':
                return AuthDog(context).get_one({id});
        }
    },
    // TODO: Believe may be possible to have each type resolve its own type.
    // otherwise, need to put an resolveType here
    (obj) =>
        (obj.dogs ? userType : dogType)
);

/**
 * Concrete types implementing Node
 */
const userType = new GraphQLObjectType({
    name: 'User',
    interfaces: [nodeInterface],
    fields: () => ({
        id: { // Generated and maintained by Auth0
            type: new GraphQLNonNull(GraphQLID),
        },
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
                return connectionFromPromisedArray(
                    dog_model.get_all_users({id: dog.id}),
                    args
                );
            },
        },
        ...dogTypeOwnedScalarFields,
    }),
});

module.exports = {
    dogType,
    dogTypeOwnedScalarFields,
    userType,
    nodeField,
};
