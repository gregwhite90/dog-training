const {
    GraphQLNonNull,
    GraphQLString,
} = require('graphql');

const {
    mutationWithClientMutationId,
} = require('graphql-relay');

const {
    dogType,
    dogTypeOwnedScalarFields,
    userToDogEdge,
} = require('../types/objects/Nodes');

const {
    AuthDog,
} = require('../../business-layer/models');

const addDogMutation = mutationWithClientMutationId({
    name: 'AddDog',
    description: `Create a new dog with the currently logged in user as an 'owner'.`,
    inputFields: {
        ...dogTypeOwnedScalarFields,
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        dogEdge: {
            type: userToDogEdge,
            // TODO: actually implement
            resolveNode: (dog, context) => {
                return dog;
            },
        },
    },
    mutateAndGetPayload: ({name, picture}, context) => {
        // TODO: actually implement
        const dog_model = new AuthDog(context);
        return dog_model.create_one({name, picture});
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
