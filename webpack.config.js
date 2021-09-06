const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, "public/javascripts"),
        filename: "bundle.js",
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'src')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }],
    },
}