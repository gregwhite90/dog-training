const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

/**
 * The entry point into the schema (root query type).
 */
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: () => {
                return 'This will be a dog training tracking application!'
            },
        },
    }),
});

/**
 * Construct schema and export it.
 */
module.exports = new GraphQLSchema({
    query: queryType,
});
