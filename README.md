# hapi-ts-wechat-applet-server

使用 hapi/typescript 开发的微信小程序服务

## 安装依赖

```bash
$ npm install
```

### 开发

```bash
$ npm run dev
```

### 项目配置

mysql 配置以及项目端口配置在 src/configurations
config.db.json - 数据库配置

```json
{
  // 用户名
  "username": "root",
  // 数据库密码
  "password": "831015",
  // 数据库
  "database": "dev_weChat_applet",
  // 链接端口
  "host": "localhost",
  "dialect": "mysql"
}
```

config.env.json

```json
{
  "weChat": {
    "wxAppid": "wx6646cee3ccecceaa",
    "wxSecret": "a413d6545e63a35fc2a0336d66534b89"
  },
  "server": {
    // 服务端口
    "port": 3000,
    // 服务host
    "host": "localhost",
    // 认证使用jwt方式（自定义secret）
    "jwtSecret": "random-secret-password",
    // 过期时间
    "jwtExpiration": "1h",
    // 路由前缀
    "routePrefix": "",
    // 需要使用的插件（与src/plugin下文件名相同，会自动引入插件）
    "plugins": [
      "hapi-auth-jwt2",
      "hapi-pagination",
      "hapi-swagger",
      "hapi-pino"
    ]
  }
}
```

## 脚本命令

### 创建一个 api 模版

在 src/api 下创建一条路由

```bash
$ npm run createApi [apiName]
```

### 数据库迁移(Sequelize CLI)

执行数据库迁移

```bash
$ npm run db:migrate
```

创建一个迁移文件

```bash
$ npm run db:generate [tabname]
```

撤销全部或一个迁移文件

```bash
$ npm run db:undo  -a | tableFileName
```

