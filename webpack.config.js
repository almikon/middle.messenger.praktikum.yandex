const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './static/html/index.html'
    })],
    devServer: {
        static: './dist',
        historyApiFallback: true,
        hot: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            }
        ]
    }
};
