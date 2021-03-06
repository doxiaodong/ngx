const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

function webpackConfig() {
  const config = {

    entry: {
      lib: './server/lib.ts',
      main: './server/index.ts'
    },

    resolve: {
      // See: http://webpack.github.io/docs/configuration.html#resolve-extensions
      extensions: ['.ts', '.js']

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

    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer({
              browsers: ['last 1 version', '> 10%']
            })
          ]
        }
      }),
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
      }),

      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        path.join(__dirname, './src')
      )
    ],

    devServer: {
      port: 7777,
      host: '0.0.0.0',
      historyApiFallback: true,
      noInfo: true
    }

  }

  return config
}

module.exports = webpackConfig()
