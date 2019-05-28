const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
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
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })
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
