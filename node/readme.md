readdir
读目录里内容 IO操作异步
readdirSync  Async 异步 sync 同步

JS是单线程的，用回调或Promise，释放主线程的控制权，主要是因为js是前端DOM的编程，用户交互比较多，等到执行完后，再通过event-loop机制，拿回控制权(callback resolve)
node里，js获取了服务器端的能力
readdirSync() 