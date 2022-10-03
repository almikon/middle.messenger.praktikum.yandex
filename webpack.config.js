const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins:[new HtmlWebpackPlugin({
        title: 'Web Chat',
        templateContent:`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./src/less/global.less">
            <script type="module" src="./src/index.ts"></script>
        </head>
        <body>
            <div id="app"></div>
        </body>
        </html>`
    })],
    devServer:{
        static: './dist',
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
                use: [
                    {
                        loader: "handlebars-loader",
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
                exclude: /(node_modules)/
            }
        ]
    }
};
