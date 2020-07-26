const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

const {
    connectionArgs,
    connectionDefinitions,
    connectionFromPromisedArray,
} = require('graphql-relay');

const { nodeInterface } = require('./Node');
const { userToDogConnection } = require('../connections/UserDog');

/**
const { userToTrainingSessionConnection } = require('../connections/UserTrainingSession');
*/

/**
 * For resolvers
 */
const { AuthUser } = require('../../../business-layer/models');

// TODO: figure out all the other imports
// TODO: decide about all the generic incoming connection types (how many are unecessary)

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

module.exports = {
    userType
};
