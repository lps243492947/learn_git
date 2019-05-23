# 通用首部
## 响应头
Content-Type: 告诉浏览器 返回的东西是什么类型
类型: text/plain test/html ... image/jpg mine

## 请求头
Content-Type 告诉后台 发送数据的格式
post 请求格式1：application/x-www-form-urlencoded form 默认编码
form 默认编码
post 请求格式2：application/json json 交换数据
区别：
第一个是表单编码的格式
第二个是json的格式
- 获取：
    req.headers['content-type']
- 获取请求方式
    req.method
- url
    req.url

## get请求
? query=''&type=''&a=''
1. url.parse() query
2. queryString

## createServer
http 服务默认 80 listen 指定另外一个端口