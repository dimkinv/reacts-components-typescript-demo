const path = require('path');

module.exports = {
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',

    entry: path.join(__dirname, 'lib/index.ts'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.min.js'
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    plugins: [
    ]
};