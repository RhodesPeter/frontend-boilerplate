module.exports = {
    entry: 'public/js/index.js',
    output: {
        filename: 'public/build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};
