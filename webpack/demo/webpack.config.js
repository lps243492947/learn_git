const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre', //前置类型
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader'
      },
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                  'css-loader'
              ]
          })
      },
      {
          test: /\.(png|jpg|gif)$/,
          use: [
              {
                  loader: 'file-loader'
              }
          ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    }),
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {
      port: '1314',
      before(app) {
        app.get('/api/test.json', function(req, res) {
            res.json({
                code: 200,
                message: 'hello world'
            })
        })
      }
  }
}
