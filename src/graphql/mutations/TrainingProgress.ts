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

// TODO: figure out
// TODO: move type defs to Nodes file
import {
    trainingProgressTypeOwnedScalarFields,
    trainingSessionToTrainingStageEdge,
} from '../types/objects/Nodes';

// TODO: figure out
// TODO: create model
import {
    AuthTrainingStage,
    AuthTrainingSession,
    AuthTrainingProgress,
} from '../../business-layer/models';

const createTrainingProgressesMutation = mutationWithClientMutationId({
    name: 'CreateTrainingProgresses',
    description: `Create logs of training progress achieved on the specified training stage in the specified training session`,
    inputFields: {
        training_session_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        training_progresses: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(
                new GraphQLInputObjectType({
                    name: 'TrainingProgress',
                    fields: {
                        training_stage_id: {
                            type: new GraphQLNonNull(GraphQLID),
                        },
                        ...trainingProgressTypeOwnedScalarFields,
                    },
                })
            )))
        }
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        trainingStageEdges: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(trainingSessionToTrainingStageEdge))),
            resolve: ({
                training_session_id,
                training_progresses,
                training_session_model,
                training_stage_model,
            }) => {
                // TODO: figure out resolver
                return training_session_model.get_all_training_stage_ids({ id: training_session_id }).then(
                    training_stage_ids => {
                        return training_progresses.map(training_progress => ({
                            cursor: cursorForObjectInConnection(
                                training_stage_ids,
                                training_progress.training_stage_id
                            ),
                            seq: training_progress.seq,
                            successes: training_progress.successes,
                            attempts: training_progress.attempts,
                            distance: training_progress.distance,
                            duration: training_progress.duration,
                            distractions: training_progress.distractions,
                            node: training_stage_model.get_one(training_progress.training_stage_id), // TODO: confirm
                        }));
                    }
                );
            },
        },
    },
    mutateAndGetPayload: async ({
        training_session_id,
        training_progresses,
    }, context) => {
        const training_session_type_and_id = fromGlobalId(training_session_id);
        const local_training_session_id = training_session_type_and_id.id;
        // TODO: fix from here
        const training_session_model = new AuthTrainingSession(context);
        const training_progress_model = new AuthTrainingProgress(context);
        const training_stage_model = new AuthTrainingStage(context);
        const created_training_stages = await Promise.all(training_progresses.map(training_progress => {
            // TODO: figure out where the type signature and type checking should live
            const training_stage_type_and_id = fromGlobalId(training_progress.training_stage_id);
            const local_training_stage_id = training_stage_type_and_id.id;
            return training_progress_model.create_one({
                input: {
                    training_sessions: {
                        connect: {
                            id: parseInt(local_training_session_id),
                        }
                    },
                    training_stages: {
                        connect: {
                            id: parseInt(local_training_stage_id),
                        }
                    },
                    seq: training_progress.seq,
                    successes: training_progress.successes,
                    attempts: training_progress.attempts,
                    distance: training_progress.distance,
                    duration: training_progress.duration,
                    distractions: training_progress.distractions,
                },
            }).then(training_progress => training_progress)
        }));
        return { training_session_id: local_training_session_id, training_stages: created_training_stages, training_session_model, training_stage_model };
    },
});

export {
    createTrainingProgressesMutation,
};
