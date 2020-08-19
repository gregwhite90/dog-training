const path = require('path');
const { updateGraphQLSchema } = require('../../scripts/updateGraphQLSchema');

updateGraphQLSchema(path.resolve(__dirname, '../data/schema.graphql'));
