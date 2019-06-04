const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();
// ejs 提供了转 html 的中间件
// 模板引擎在哪个位置
app.use(
  views(
    path.join(__dirname, './view'), {
      extension: 'ejs'
    }
  )
)
const user = {
  name: 'AJie',
  post: [
    {id: 0, title: '流动的 SVG 线条'},
    {id: 1, title: 'Vue.js 系列'}
  ]
}
const posts = [
  {
    id: 0,
    content: '用 SVG + CSS 实现'
  },
  {
    id: 1,
    content: '<strong>react 表示不服</strong>'
  }
]
app.use(async (ctx) => {
  // req res
  // /user 用户的主页 
  // req.url 解析出请求的地址
  if (ctx.path === '/user') {
    // user ejs
    await ctx.render('user', {
      user
    });
  } else if (ctx.path === '/post') {
    // get 请求的查询参数 name=a&age=b {name: age:}
    const { id } = ctx.query;
    // string posts number
    const post = posts.find(item => item.id == id);
    await ctx.render('post', { post })
  } 
  else {
    ctx.body = '无法处理该路径' + ctx.request.url
  }
})
// .listen 就是 原生 http .listen
app.listen(8080, () => {
  console.log('server is running 8080');
})