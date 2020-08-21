import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
    GraphQLInputObjectType,
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

const createTrainingStagesMutation = mutationWithClientMutationId({
    name: 'CreateTrainingStages',
    description: `Create the training stages for the specified desired behavior`,
    inputFields: {
        behavior_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        training_stages: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(
                new GraphQLInputObjectType({
                    name: 'TrainingStageScalarFields',
                    fields: trainingStageTypeOwnedScalarFields
                })
            )))
        }
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        trainingStageEdges: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(trainingStageEdge))),
            resolve: ({ behavior_id, training_stages, behavior_model }) => { // TODO: figure out resolver
                return behavior_model.get_all_training_stage_ids({ id: behavior_id }).then(
                    training_stage_ids => {
                        return training_stages.map(training_stage => ({
                            cursor: cursorForObjectInConnection(
                                training_stage_ids,
                                training_stage
                            ),
                            node: training_stage
                        }));
                    }
                );
            },
        },
    },
    mutateAndGetPayload: async ({
        behavior_id,
        // TODO: fix
        training_stages,
    }, context) => {
        const behavior_type_and_id = fromGlobalId(behavior_id);
        const local_behavior_id = behavior_type_and_id.id;
        const training_stage_model = new AuthTrainingStage(context);
        const behavior_model = new AuthBehavior(context);
        const created_training_stages = Promise.all(training_stages.map(training_stage => {
            return training_stage_model.create_one({
                behavior_id,
                input: training_stage,
            }).then(training_stage => training_stage)
        }));
        return { behavior_id: local_behavior_id, training_stages: created_training_stages, behavior_model };
    },
});

export {
    createTrainingStagesMutation,
};
