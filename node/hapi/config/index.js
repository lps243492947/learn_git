require('env2')('./.env');
const { env } = process;
// console.log(env);
module.exports = {
  host: env.HOST,
  port: env.PORT
}