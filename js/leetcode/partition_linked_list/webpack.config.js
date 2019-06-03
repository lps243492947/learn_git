const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'src/index.html', // 配置文件模板
    }),
  ],
  devServer: {
    port: '1234'
  },
}
