module.exports = {
    entry: './public/js/index.js',
    output: {
        filename: './public/build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['babel-preset-env']
                  }
                }
            }
        ],
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
          },
        ],
    }
};
