const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

function webpackConfig() {
  const config = {
    devtool: '#eval-source-map',

    entry: {
      lib: './server/lib.ts',
      main: './server/index.ts'
    },

    output: {
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map'
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
        // See: https://github.com/jtangelder/sass-loader
        // { test: /\.scss$/, loaders: ['raw-loader', 'postcss-loader', 'sass-loader?sourceMap'] },
        // See: https://github.com/webpack/less-loader
        { test: /\.less$/, loaders: ['raw-loader', 'postcss-loader', 'less-loader'] },
        // See: https://github.com/webpack/raw-loader
        { test: /\.html$/, loader: 'raw-loader', exclude: [path.resolve(__dirname, 'server/index.html')] },
      ]
    },

    postcss: [
      autoprefixer({
        browsers: ['last 1 version', '> 10%']
      })
    ],

    plugins: [
      new HtmlWebpackPlugin({
        template: 'server/index.html',
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
      port: 7777,
      host: 'localhost',
      historyApiFallback: true,
      noInfo: true
    }

  }

  return config
}

module.exports = webpackConfig
