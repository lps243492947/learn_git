- npm 不只是包管理器, yarn
工作流里的重要法则
npm run scripts
- webpack 
  bunder 打包器
  传统的前端 html css js 都是文件
  这只是半成品，现代前端讲究开发工艺，需要打包成一个bundle
  css 要编译，还要压缩
  js 需要使用babel es5789->es5 需要压缩
  html template
  打包到一起 形成一个可以发布的产品 webpack

- 项目有多种环境 
  一个项目有多份代码
  start dev development 开发环境 代码环境 在本地
  test 测试环境 在局域网内
  build --mode production compressed 生产环境 线上环境 域名对应的服务器