const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = [
    {
        name: 'client',
        mode: 'development',
        output: {
            path: path.resolve(__dirname, 'client-dist'),
            clean: true
        },
        resolve: {
            alias: {
                client: path.resolve(__dirname, 'client')
            },
            extensions: ['.js', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: path.resolve(__dirname, 'client'),
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: 'css-loader',
                    include: path.resolve(__dirname, 'client'),
                    exclude: /node_modules/,
                },
                {
                    test: /\.md$/i,
                    use: 'raw-loader',
                    include: path.resolve(__dirname, 'client'),
                    exclude: /node_modules/,
                },
                {
                    test: /\.(ico|png|jp?g|svg)/,
                    type: 'asset/resource',
                    include: path.resolve(__dirname, 'client'),
                    exclude: /node_modules/,
                    generator: {
                        filename: 'img/[name].[hash:8][ext]'
                    }
                },
            ],
        },
        plugins: [
            new HtmlBundlerPlugin({
                entry: 'client/',
                js: {
                    filename: 'js/[name].[contenthash:8].js'
                },
                css: {
                    filename: 'css/[name].[contenthash:8].css'
                },
            })
        ],
        optimization: {
            usedExports: true,
        }
    },
];
