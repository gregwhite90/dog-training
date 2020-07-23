const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

const {
    nodeDefinitions,
    fromGlobalID,
    globalIdField,
    connectionArgs,
    connectionDefinitions,
    connectionFromArray,
    mutationWithClientMutationId,
} = require('graphql-relay');

const {
    getDog,
    getDogs,
    getHuman,
    getHumans,
    getBreed,
    getBreeds,
    createHuman,
} = require('./business-logic/data')

const { nodeInterface, nodeField } = nodeDefinitions(
    // Resolve a global ID to its object
    (globalID) => {
        const { type, id } = fromGlobalID(globalID);
        switch(type) {
            case 'Dog':
                return getDog(id);
            case 'Human':
                return getHuman(id);
            case 'Breed':
                return getBreed(id);
        }
    },
    // Resolve an object to its type
    // TODO: Need a better way to do this
    (obj) =>
        (obj.breeds ? dogType : (obj.infoUrl ? breedType : humanType)),
);

/**
 * Basic object types
 */
const breedType = new GraphQLObjectType({
    name: 'Breed',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        name: {
            type: GraphQLString,
        },
        infoUrl: {
            type: GraphQLString,
        },
    }),
});

const { connectionType: breedConnection } = connectionDefinitions({
    nodeType: breedType,
});

const dogType = new GraphQLObjectType({
    name: 'Dog',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        name: {
            type: GraphQLString,
        },
        breeds: {
            type: breedConnection,
            description: 'The known breed(s) of the dog.',
            args: connectionArgs,
            resolve: (dog, args) =>
                connectionFromArray(dog.breeds.map(getBreed), args),
        },
    }),
});

const { connectionType: dogConnection } = connectionDefinitions({
    nodeType: dogType,
});

const humanType = new GraphQLObjectType({
    name: 'Human',
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField(),
        name: {
            type: GraphQLString,
        },
    }),
});

const { connectionType: humanConnection } = connectionDefinitions({
    nodeType: humanType,
});

/**
 * Mutation types
 */
const humanMutation = mutationWithClientMutationId({
    name: 'IntroduceHuman',
    inputFields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    outputFields: {
        human: {
            type: humanType,
            resolve: (payload) => getHuman(payload.id),
        },
    },
    mutateAndGetPayload: ({name}) => {
        const newHuman = createHuman(name);
        return {
            id: newHuman.id,
        }
    },
});

/**
 * The entry point into the schema (root query type).
 */
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        dogs: {
            type: dogConnection,
            resolve: (_, args) => connectionFromArray(getDogs(), args),
        },
        humans: {
            type: humanConnection,
            resolve: (_, args) => connectionFromArray(getHumans(), args),
        },
        breeds: {
            type: breedConnection,
            resolve: (_, args) => connectionFromArray(getBreeds(), args),
        },
        node: nodeField,
    }),
});

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        introduceHuman: humanMutation,
    }),
});

/**
 * Construct schema and export it.
 */
module.exports = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
});
