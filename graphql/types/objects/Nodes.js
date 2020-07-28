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
            return model.get_one({id});
        }
    },
    // TODO: Believe may be possible to have each type resolve its own type.
    // otherwise, need to put an resolveType here
    (obj) =>
        (obj._node_type === 'User' ? userType : dogType)
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

/**
const userRoleDescAndType = {
    description: 'The role the user plays for the dog.',
    type: userDogRoleType,
};

const userDogRoleType = new GraphQLEnumType({
    name: 'UserDogRole',
    values: {
        OWNER,
        TRAINER,
        VIEWER,
    }
});
*/

const { connectionType: dogToUserConnection } = connectionDefinitions({
    name: 'DogToUser',
    nodeType: userType,
    /**
    edgeFields: () => ({
        user_role: {
            ...userRoleDescAndType,
            resolve: () => null // TODO: implement the function that pulls from the DB
        },
    }),
    */
});

const { connectionType: userToDogConnection } = connectionDefinitions({
    name: 'UserToDog',
    nodeType: dogType,
    /**
    edgeFields: () => ({
        user_role: {
            ...userRoleDescAndType,
            resolve: () => null // TODO: implement the function that pulls from the DB
        },
    }),
    */
});

module.exports = {
    dogType,
    dogTypeOwnedScalarFields,
    userType,
    nodeField,
};
