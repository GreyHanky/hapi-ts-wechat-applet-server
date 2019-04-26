import * as configs from "./config.env.json";

type TconfigType = "weChat" | "server" | "database";
interface IConfigs {
  development: Object;
  production: Object;
}

class Config {
  private configs: IConfigs;

  constructor(env: string) {
    if (configs[env]) {
      this.configs = configs[env];
    } else {
      throw new Error(`没有这个环境配置--${env}`);
    }
  }

  public get<T>(configType: TconfigType): T {
    return this.configs[configType];
  }
}

export default new Config(process.env.NODE_ENV || "development");
