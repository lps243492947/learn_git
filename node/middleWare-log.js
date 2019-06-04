const Koa = require('koa');

const app = new Koa();
app.use(async (ctx) => {
  const start = Date.now();
  ctx.body = 'hello koa';
  const end = Date.now();
  const diff = end - start;
  // 响应头里面 writeHead Content-type
  ctx.set('X-Response-Time', `${diff}ms`);
  console.log(`spend ${diff}ms`);
})
app.use()
app.listen(3001);