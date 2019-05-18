前端安全

表单
form -> onsubmit -> url
POST data:{email:'zm@163.com', password:'123456'}

后端 登入过程 sql查找的过程
sql 语法报错， 服务器出错

用户的输入不可信任
password' 导致sql的提前结束或多了一个' 产生500错误 编码解码

登入账号
escape()编码
SELECT * from users
    WHERE email = 'user@email.com'
    AND password = 'password%27'