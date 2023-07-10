const path = require('path');
const MiniCssExtratPlugin = require('mini-css-extract-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/components/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            /*      {
                      test: /\.html$/,
                      use: {
                          loader: 'html-loader'
                      }
                  },*/
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtratPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        /*  new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html' 
          }),*/
        new MiniCssExtratPlugin({
            filename: 'css/[name].css'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
        open: true
    },
    stats: { children: true }
}