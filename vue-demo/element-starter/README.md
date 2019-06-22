- 相应框架或技术栈的快速启动
gith 项目 Starter
  .git删除

- 组件，路由接管一切
  路由组件最好用目录
  <router-view />
  如何install ?

- 全家桶
  vue-router 辅助路由
  vuex 负责数据流管理
  axios 负责API

- alias
  短路径，给常用的路径配置

- 目录架构
  - components 组件
  - pages 页面级别组件
  - commons header，footer，dialog 等跨页面的通用组件
  - element-ui 框架级别组件，现在已经全局可用了

- 在components pages 目录下加一个index.js 进行模块化输出所有的文件，为的就是可读性

-transition name
  v-enter (短)->v-enter-active Enter
  v-leave -> v-leave-active Leave