// 单点入口
const Hapi = require('hapi');
const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
const configHelloHapi = require('./config');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const routesShop = require('./routes/shops');
const routesOrders = require('./routes/orders');
server.connection({
  port: configHelloHapi.port,
  host: configHelloHapi.host
})

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ]);
  server.route([
    ...routesHelloHapi,
    ...routesShop,
    ...routesOrders
  ]);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init();