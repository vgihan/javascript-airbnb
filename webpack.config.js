const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: ['./public/js/main.js', './public/css/main.scss']
    },
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "js/[name].js",
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/[name].css' })
    ],
    devServer: {
      contentBase: path.resolve(__dirname, 'src')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    devtool: 'inline-source-map',
    mode: "development",
}