const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function webpackConfig() {
  const config = {
    devtool: '#eval-source-map',

    entry: {
      lib: './server/lib.ts',
      main: './server/index.ts'
    },

    resolve: {
      // See: http://webpack.github.io/docs/configuration.html#resolve-extensions
      extensions: ['', '.ts', '.js'],

      root: path.resolve(__dirname, 'src'),

      // remove other default values
      modulesDirectories: ['node_modules']

    },

    module: {
      loaders: [
        // See: https://github.com/s-panferov/awesome-typescript-loader
        { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/] },
        // SCSS
        { test: /\.html$/, loader: 'raw-loader', exclude: [path.resolve(__dirname, 'server/index.html')] },
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/server/index.html',
        minify: {
          minifyCSS: true,
          collapseWhitespace: true,
          removeComments: true
        },
        chunksSortMode: 'dependency'
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['lib', 'main'].reverse()
      })
    ],

    devServer: {
      port: 6666,
      host: 'localhost',
      historyApiFallback: true,
      noInfo: true
    }

  }

  return config
}

module.exports = webpackConfig
