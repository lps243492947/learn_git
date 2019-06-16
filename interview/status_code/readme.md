HTTP协议 只有有了它 才有了 req response
状态码: HTTP响应 (response) 中包含状态码
浏览器 代理 proxy
1xx 请求正在处理，继续等待
2xx 具体的状态码 请求已经成功处理了 200 OK
3xx 重定向 Location
4xx 用户请求过程中出现错误 (地址错了 用户闯进一个要权限的地方 受限资源) 404 not found
5xx 服务器端出现错误

301 永久跳转
用户请求 www.xiaomi.com www.mi.com
告诉蜘蛛 
www.xiaomi.com/a.html 红米
废弃了，发送了一个301 www.mi.com/a.html
3打头的区别，在于永久跳转，告诉蜘蛛把记录更新掉
301 可以在改变状态码，不变，来展示理解
http://localhost:3000 301 永久跳转,
再次访问的时候，浏览器有缓存，不需要再走服务器
302  临时跳转，不会告诉蜘蛛 或在前端缓存