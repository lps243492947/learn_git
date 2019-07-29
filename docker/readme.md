- 项目要经过开发，测试，上线
  env cross-env
  这些环境是在不同的机器上的 运维
  一键发布我们的项目 容器开发技术

- OS linux mysql mongodb
  独立 应用之间没有影响，共享动力，数据存储
  极大提升了机器的性能 VMWare
  测试服务器上 

- 前端可以独立做运维，发布 变得更简单 前端可以利用docker 发布
- 微服务架构
  端口

- Dockerfile 文件
FROM 拉取镜像来到本地 跨机器安装时很方便
WORKDIR /app 设置镜像中的工作目录
COPY package.json /app 拷贝文件
RUN npm install 安装node包
COPY . /app
EXPOSE 8081
CMD node index.js

- 根据Dockerfile 构建镜像
  docker build -t image-name .
  docker images 
