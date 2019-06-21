- sequelize 脚手架
    mysql2 数据库驱动
    sequelize orm 工具 table -> object
    对底层的sql API 化 model
    sequelize-cli 命令行工具

- config
./node_modules/.bin/sequelize init
./node_modules/.bin/sequelize db:create
./node_modules/.bin/sequelize migration:create --name create-shops-table 建表或修改表
./node_modules/.bin/sequelize db:migrate 执行迁移
./node_modules/.bin/sequelize seed:create --name init-shops 初始化