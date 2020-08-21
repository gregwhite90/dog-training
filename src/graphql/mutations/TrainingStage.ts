import {
    GraphQLNonNull,
    GraphQLID,
} from 'graphql';

import {
    mutationWithClientMutationId,
    cursorForObjectInConnection,
    fromGlobalId,
} from 'graphql-relay';

import {
    trainingStageTypeOwnedScalarFields,
    trainingStageEdge,
} from '../types/objects/Nodes';

import {
    AuthBehavior,
    AuthTrainingStage,
} from '../../business-layer/models';

const createTrainingStageMutation = mutationWithClientMutationId({
    name: 'CreateTrainingStage',
    description: `Create a new stage of training for the specified desired behavior`,
    inputFields: {
        behavior_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        ...trainingStageTypeOwnedScalarFields,
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        trainingStageEdge: {
            type: new GraphQLNonNull(trainingStageEdge),
            resolve: ({ training_stage, behavior_model }) => { // TODO: figure out resolver
                return behavior_model.get_all_training_stage_ids({ id: training_stage.behavior_id }).then(training_stages => {
                    return {
                        cursor: cursorForObjectInConnection(training_stages, training_stage),
                        node: training_stage
                    };
                });
            },
        },
    },
    mutateAndGetPayload: async ({
        behavior_id,
        seq,
        incentive,
        verbal,
        hand,
        reward_frequency,
    }, context) => {
        const behavior_type_and_id = fromGlobalId(behavior_id);
        const training_stage_model = new AuthTrainingStage(context);
        const behavior_model = new AuthBehavior(context);
        const training_stage = await training_stage_model.create_one({
            behavior_id: behavior_type_and_id.id,
            input: {
                seq,
                incentive,
                verbal,
                hand,
                reward_frequency
            }
        }).then(training_stage => training_stage);
        return { training_stage, behavior_model };
    },
});

export {
    createTrainingStageMutation,
};
