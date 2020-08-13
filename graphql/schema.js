/**
 * The GraphQL types this file defines.
 */
const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');

/**
 * Definitions and functions needed for the queries at the root.
 */
const { nodeField, userType } = require('./types/objects/Nodes');
const { AuthUser } = require('../business-layer/models');
// TODO: Confirm right one for the resolver

/**
 * Definitions for all mutations at the root.
 */
const {
    createDogMutation,
    editDogMutation,
    /**
    removeDogForViewerMutation,
    removeDogForAllMutation,
    */
} = require('./mutations/Dog');

const {
    inviteUserByEmailMutation,
    acceptInvitationMutation,
} = require('./mutations/User');

const {
    createBehaviorMutation,
} = require('./mutations/Behavior');
/**
const {
    addTrainingStageMutation,
    removeTrainingStageMutation,
} = require('./mutations/TrainingStage');

const { addTrainingSessionMutation } = require('./mutations/TrainingSession');
const { addTrainingProgressMutation } = require('./mutations/TrainingProgress');
*/

/**
 * The entry points into the schema (root types).
 */
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        node: nodeField,
        viewer: {
            type: userType,
            description: 'The currently logged in user.',
            resolve: (_, _args, context) => {
                const user_model = new AuthUser(context);
                return user_model.get_viewer();
            },
        }
    }),
});

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        /* Dog-focused mutations */
        createDog: createDogMutation,
        editDog: editDogMutation,
        inviteUserByEmail: inviteUserByEmailMutation,
        acceptInvitation: acceptInvitationMutation,
        /**
        removeDogForViewer: removeDogForViewerMutation,
        removeDogForAll: removeDogForAllMutation,
        /* Behavior-focused mutations */
        createBehavior: createBehaviorMutation,
        /*
        removeBehavior: removeBehaviorMutation,
        /* Training stage-focused mutations *
        addTrainingStage: addTrainingStageMutation,
        removeTrainingStage: removeTrainingStageMutation,
        /* Training session-focused mutations *
        addTrainingSession: addTrainingSessionMutation,
        /* Training session- and Training progress-focused mutations *
        addTrainingProgress: addTrainingProgressMutation,
        */
    }),
});

/**
 * Construct schema and export it.
 */
module.exports = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
});
