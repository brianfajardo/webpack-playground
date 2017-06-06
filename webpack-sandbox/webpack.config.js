const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const VENDOR_LIBS = [
  'faker',
  'lodash',
  'react',
  'redux',
  'react-redux',
  'react-dom',
  'react-input-range',
  'redux-form',
  'redux-thunk',
  'react-router'
]

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendors: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
}
