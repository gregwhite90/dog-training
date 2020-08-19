const path = require('path');
const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
    addBabelPlugins(
        ['relay', {'artifactDirectory': './src/__generated__'}]
    )
)
