const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: [
            "./public/js/main.js",
            "./public/css/main.scss",
            "./public/css/utils.scss",
            "./public/css/reset.scss",
            "./public/css/font.scss",
            "./public/font/NotoSansKR-Light.otf",
        ],
    },
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "js/[name].js",
    },
    plugins: [new MiniCssExtractPlugin({ filename: "css/[name].css" })],
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(svg|gif|otf)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader",
            },
        ],
    },
    devtool: "inline-source-map",
    mode: "development",
};
