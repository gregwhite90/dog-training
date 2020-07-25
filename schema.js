const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const {
    nodeDefinitions,
    fromGlobalId,
    globalIdField,
    connectionArgs,
    connectionDefinitions,
    connectionFromPromisedArray,
    mutationWithClientMutationId,
} = require('graphql-relay');

const {
    getDog,
    getDogs,
    getHuman,
    getHumans,
    getBreed,
    getBreeds,
    getDogBreeds,
    createHuman,
    addBreedToDog,
} = require('./business-logic/data')

const { nodeInterface, nodeField } = nodeDefinitions(
    // Resolve a global ID to its object
    (globalID) => {
        const { type, id } = fromGlobalId(globalID);
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
        (obj.breeds ? dogType : (obj.info_url ? breedType : humanType)),
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
        info_url: {
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
                connectionFromPromisedArray(getDogBreeds(dog.id), args),
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
const introduceHumanMutation = mutationWithClientMutationId({
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

const addBreedToDogMutation = mutationWithClientMutationId({
    name: 'AddBreedToDog',
    inputFields: {
        dog_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        breed_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    outputFields: {
        dog: {
            type: dogType,
            resolve: (payload) => getDog(payload.dog_id),
        },
    },
    mutateAndGetPayload: ({dog_id, breed_id}) => {
        const dog = fromGlobalId(dog_id);
        const breed = fromGlobalId(breed_id);
        addBreedToDog(dog.id, breed.id);
        return {
            dog_id: dog.id,
        };
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
            resolve: (_, args) => connectionFromPromisedArray(getDogs(), args),
        },
        humans: {
            type: humanConnection,
            resolve: (_, args) => connectionFromPromisedArray(getHumans(), args),
        },
        breeds: {
            type: breedConnection,
            resolve: (_, args) => connectionFromPromisedArray(getBreeds(), args),
        },
        node: nodeField,
    }),
});

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        introduceHuman: introduceHumanMutation,
        addBreedToDog: addBreedToDogMutation,
    }),
});

/**
 * Construct schema and export it.
 */
module.exports = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
});
