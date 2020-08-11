const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} = require('graphql');

const {
    mutationWithClientMutationId,
    cursorForObjectInConnection,
    fromGlobalId,
} = require('graphql-relay');

const {
    behaviorType,
    behaviorTypeOwnedScalarFields,
    behaviorEdge,
} = require('../types/objects/Nodes');

const {
    AuthDog,
    AuthBehavior,
} = require('../../business-layer/models');

const createBehaviorMutation = mutationWithClientMutationId({
    name: 'CreateBehavior',
    description: `Create a new desired behavior for the specified dog`,
    inputFields: {
        ...behaviorTypeOwnedScalarFields, // TODO: figure out the input types (scalar owned fields)
    },
    outputFields: {
        // TODO: confirm if want to return additional info
        behaviorEdge: {
            type: new GraphQLNonNull(behaviorEdge),
            resolve: ({behavior, dog_model}) => { // TODO: figure out resolver
                return dog_model.get_all_behavior_ids({id: behavior.dog_id}).then(behaviors => {
                    return {
                        cursor: cursorForObjectInConnection(behaviors, behavior),
                        node: behavior
                    };
                });
            },
        },
    },
    mutateAndGetPayload: ({
        dog_id,
        name,
        explanation,
        lure_description,
        shape_description,
        verbal_command,
        hand_signal,
        has_duration,
        release_command,
    }, context) => {
        const dog_type_and_id = fromGlobalId(dog_id);
        const behavior_model = new AuthBehavior(context);
        const dog_model = new AuthDog(context);
        const behavior = behavior_model.create_one({
            dog_id: dog_type_and_id.id,
            name,
            explanation,
            lure_description,
            shape_description,
            verbal_command,
            hand_signal,
            has_duration,
            release_command,
        }).then(behavior => behavior);
        return {behavior, dog_model};
    },
});

module.exports = {
    createBehaviorMutation,
};
