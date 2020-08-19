/**
 * The GraphQL types this file defines.
 */
import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';

import {
    Context,
} from '../context';

/**
 * Definitions and functions needed for the queries at the root.
 */
import { nodeField, userType } from './types/objects/Nodes';
import { AuthUser } from '../business-layer/models';
// TODO: Confirm right one for the resolver

/**
 * Definitions for all mutations at the root.
 */
import {
    createDogMutation,
    editDogMutation,
    /**
    removeDogForViewerMutation,
    removeDogForAllMutation,
    */
} from './mutations/Dog';

import {
    inviteUserByEmailMutation,
    acceptInvitationMutation,
} from './mutations/User';

import {
    createBehaviorMutation,
} from './mutations/Behavior';
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
            resolve: (_parent: {}, _args, context: Context) => {
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
const DogTrainingSchema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
});

export {
    DogTrainingSchema,
};
