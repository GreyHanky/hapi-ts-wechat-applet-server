import * as configs from "./config.env.json";
import * as dbConfigs from "./config.db.json";
import { IDBconfig, IServerConfig, IWeChatConfig } from "./index";

class Config {
  public weChat:IWeChatConfig;
  public server: IServerConfig;
  public database: IDBconfig;

  constructor(env: any) {
    const dbconfigEnv = (dbConfigs as any)[env];
    const configsEnv = (configs as any)[env];

    if (!dbconfigEnv) {
      throw new Error(`没有这个环境的数据库配置--${env}`);
    }
    if (!configsEnv) {
      throw new Error(`没有这个环境的服务器配置--${env}`);
    }

    this.weChat = configsEnv.weChat;
    this.server = configsEnv.server;
    this.database = dbconfigEnv;
  }

}

export default new Config(process.env.NODE_ENV || "development");
