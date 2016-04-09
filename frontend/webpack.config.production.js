const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const ES_HOST = process.env.ES_HOST;
const MIXPANEL_TOKEN = process.env.MIXPANEL_TOKEN;

module.exports = {
    entry: './src/main.jsx',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },

    output: {
        path: 'build',
        filename: 'bundle-[hash].js',
        publicPath: '/'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.html?$/,
            loader: 'html'
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.(jpg|png|svg)$/,
            loaders: ['file-loader?name=[name].[ext]']
        }],
        noParse: [/moment.js/]
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: {
            except: ['require', 'export', '$super']
          },
          compress: {
              warnings: false,
              properties: true,
              drop_debugger: true,
              comparisons: true,
              evaluate: true,
              loops: true,
              cascade: true,
              collapse_vars: true,
              negate_iife: true,
              sequences: true,
              dead_code: true,
              conditionals: true,
              booleans: true,
              unused: true,
              if_return: true,
              join_vars: true,
              drop_console: true
          }
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'ES_HOST': JSON.stringify(ES_HOST),
                'MIXPANEL_TOKEN': JSON.stringify(MIXPANEL_TOKEN)
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.template.html'
        })
    ]
};
