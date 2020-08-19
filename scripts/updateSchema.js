const path = require('path');
const { updateGraphQLSchema } = require('./updateGraphQLSchema');

updateGraphQLSchema(path.resolve(__dirname, '../graphql/data/schema.graphql'));
