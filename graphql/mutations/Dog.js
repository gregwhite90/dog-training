const {
    GraphQLNonNull,
    GraphQLString,
} = require('graphql');

const {
    mutationWithClientMutationId,
} = require('graphql-relay');

const {
    dogType,
    dogTypeOwnedScalarFields
} = require('../objects/Dog');

const addDogMutation = mutationWithClientMutationId({
    name: 'AddDog',
    description: `Create a new dog with the currently logged in user as an 'owner'.`,
    inputFields: {
        ...dogTypeOwnedScalarFields,
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        dog: {
            type: dogType,
            // TODO: actually implement
            resolve: ({id}, context) => getNode({id, tableName: 'humans'}, context),
        },
    },
    mutateAndGetPayload: ({name, picture}, context) => {
        // TODO: actually implement
        const newHuman = createHuman(name, context);
        return {
            id: newHuman.id,
        }
    },
});
/**
const removeDogForViewerMutation = mutationWithClientMutationId({
    name: 'RemoveDogForViewer',
    description: 'Removes the dog from the currently logged in user.',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        deleted_id: {
            type: GraphQLID,
            // TODO: actually implement
            resolve: ({id}, context) => getNode({id, tableName: 'humans'}, context),
        },
    },
    mutateAndGetPayload: ({id}, context) => {
        // TODO: actually implement
        const newHuman = createHuman(name, context);
        return {
            id: newHuman.id,
        }
    },
});

const removeDogForAllMutation = mutationWithClientMutationId({
    name: 'RemoveDogForAll',
    description: `Delete dog from the app for all users. Only succeeds if user has 'owner' role for the dog.`,
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        deleted_id: {
            type: GraphQLID,
            // TODO: actually implement
            resolve: ({id}, context) => getNode({id, tableName: 'humans'}, context),
        },
    },
    mutateAndGetPayload: ({id}, context) => {
        // TODO: actually implement
        const newHuman = createHuman(name, context);
        return {
            id: newHuman.id,
        }
    },
});

const editDogMutation = mutationWithClientMutationId({
    name: 'EditDog',
    inputFields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        name: {
            type: GraphQLString,
        },
        picture: {
            type: GraphQLString,
        },
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        deleted_id: {
            type: GraphQLID,
            // TODO: actually implement
            resolve: ({id}, context) => getNode({id, tableName: 'humans'}, context),
        },
    },
    mutateAndGetPayload: ({id}, context) => {
        // TODO: actually implement
        const newHuman = createHuman(name, context);
        return {
            id: newHuman.id,
        }
    },
});
*/
module.exports = {
    addDogMutation,
    /**
    removeDogForViewerMutation,
    removeDogForAllMutation,
    editDogMutation,
    */
}
