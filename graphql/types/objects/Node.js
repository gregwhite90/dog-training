const {
    nodeDefinitions,
    fromGlobalId,
    globalIdField,
} = require('graphql-relay');

const { userType } = require('./User');
const { dogType } = require('./Dog');

const {
    AuthUser,
    AuthDog,
} = require('../../../business-layer/models');

const { nodeInterface, nodeField } = nodeDefinitions(
    // Resolve a global ID to its object
    (globalID, context) => {
        const { type, id } = fromGlobalId(globalID);
        switch (type) {
            case 'User':
                return AuthUser(context).get_one({id});
            case 'Dog':
                return AuthDog(context).get_one({id});
        }
    },
    // TODO: Believe may be possible to have each type resolve its own type.
    // otherwise, need to put an resolveType here
    (obj) =>
        (obj.dogs ? userType : dogType)
);

module.exports = {
    nodeInterface,
    nodeField,
}
