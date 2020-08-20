import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} from 'graphql';

import {
    mutationWithClientMutationId,
    cursorForObjectInConnection,
    fromGlobalId,
} from 'graphql-relay';

import {
    behaviorType,
    behaviorTypeOwnedScalarFields,
    behaviorEdge,
} from '../types/objects/Nodes';

import {
    AuthDog,
    AuthBehavior,
} from '../../business-layer/models';

const createBehaviorMutation = mutationWithClientMutationId({
    name: 'CreateBehavior',
    description: `Create a new desired behavior for the specified dog`,
    inputFields: {
        dog_id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        ...behaviorTypeOwnedScalarFields, // TODO: figure out the input types (scalar owned fields)
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        behaviorEdge: {
            type: new GraphQLNonNull(behaviorEdge),
            resolve: ({ behavior, dog_model }) => { // TODO: figure out resolver
                console.log('In behavior edge resolver');
                console.log(behavior);
                return dog_model.get_all_behavior_ids({ id: behavior.dog_id }).then(behaviors => {
                    return {
                        cursor: cursorForObjectInConnection(behaviors, behavior),
                        node: behavior
                    };
                });
            },
        },
    },
    mutateAndGetPayload: async ({
        dog_id,
        name,
        explanation,
        incentive_method,
        incentive_description,
        verbal_command,
        hand_signal,
        has_duration,
        release_command,
    }, context) => {
        const dog_type_and_id = fromGlobalId(dog_id);
        const behavior_model = new AuthBehavior(context);
        const dog_model = new AuthDog(context);
        const behavior = await behavior_model.create_one({
            dog_id: dog_type_and_id.id,
            input: {
                name,
                explanation,
                incentive_method,
                incentive_description,
                verbal_command,
                hand_signal,
                has_duration,
                release_command,
            }
        }).then(behavior => behavior);
        return { behavior, dog_model };
    },
});

export {
    createBehaviorMutation,
};
