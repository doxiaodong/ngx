const commonConfig = require('./webpack.common.js')
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')

const ENV = 'prod'

module.exports = webpackMerge(commonConfig, {
  devtool: '#source-map',
  output: {
    path: 'dist',
    publicPath: '//ocyuhuhtm.bkt.clouddn.com/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].map',
    chunkFilename: '[id].[hash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({

      beautify: false,

      mangle: {
        screw_ie8: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
})
