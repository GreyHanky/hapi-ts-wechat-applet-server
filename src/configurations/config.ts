import * as configs from "./config.env.json";
import * as dbConfigs from "./config.db.json";

import { IDBconfig, IServerConfig, IWeChatConfig } from "./index";

type TconfigType = "weChat" | "server" | "database";

interface IConfig {
  weChat: IWeChatConfig;
  server: IServerConfig;
  database: IDBconfig;
}

interface IConfigs {
  development: IConfig;
  production: IConfig;
}

class Config {
  private configs: IConfigs;

  constructor(env: string) {
    if (!dbConfigs[env]) {
      throw new Error(`没有这个环境的数据库配置--${env}`);
    }
    if (!configs[env]) {
      throw new Error(`没有这个环境的服务器配置--${env}`);
    }

    this.configs = { ...configs[env], database: dbConfigs[env] };
  }

  public get<T>(configType: TconfigType): T {
    return this.configs[configType];
  }
}

export default new Config(process.env.NODE_ENV || "development");
