- 无编译 不代码
  webpack 已经成为工作流程的霸主
  编译过程和js的promise一样是一个异步的
  1. 代码写在 dev过程中 src/
  2. 上线在build阶段 目录是 dist/
  3. 启动web 服务器 webpack-dev-server

- webpack html template
  plugin html-webpack-plugin

- log 不在根目录下，怎么找到它呢？多写点地址 
  alias

  resolve .js -> 
    module
      rules
          .js  babel-loader

  babel-core babel-cli babel-preset-env
  babel-loader 有点兼容性问题
  module.exports  模块
  rules: [
      test: /\.js$/,
      use: 'babel-loader'
  ]
  resolve: {
      extensions: ['.js']
  }

  8080 webpack-dev-server 启动了 html-webpack-plugin template ./src/index.html
  为什么运行了 
  html + js

  - webpack 一切皆可打包，打包到js里
  css 对于js来说就是个文本而已
  img 对于js来说可以打包成base64
  但是css 应该独立打包，因为这是性能优化的需要
  只有一个main.js  显示是最慢的