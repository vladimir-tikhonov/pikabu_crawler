const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.jsx',
  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  output: {
    path: 'build',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
    {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.html?$/, loader: 'html' },
      { test: /\.scss$/,  loaders: ['style', 'css', 'sass'] },
      {
        test: /\.(jpg|png|svg)$/,
        loaders: ['file-loader?name=[name].[ext]']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.template.html'
    })
  ],

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: './build',
    historyApiFallback: true
  }
};
