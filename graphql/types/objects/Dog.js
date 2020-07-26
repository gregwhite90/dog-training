const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

const {
    connectionArgs,
    connectionFromPromisedArray,
    globalIdField,
} = require('graphql-relay');

const { nodeInterface } = require('./Node');
const { dogToUserConnection } = require('../connections/UserDog');
// TODO: figure out all the other imports

/**
 * For resolvers
 */
const { AuthDog } = require('../../../business-layer/models');

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
};
