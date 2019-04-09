import * as nconf from "nconf";
import * as path from "path";

/**
 * 创建一个配置文件类
 */
export default class CreateConfig {
  public config: nconf.Provider;
  private env: string = process.env.NODE_ENV || "development";
  constructor(configUrl: string) {
    const configs = new nconf.Provider({
      env: true,
      argv: true,
      store: {
        type: "file",
        file: path.join(__dirname, configUrl)
      }
    });
    const envConfig = configs.get(this.env);
    if (!envConfig) {
      throw new Error(`没有这个环境的配置--${this.env}`);
    }

    this.config = envConfig;
  }

  public get<T>(configTagName: string): T {
    const config = this.config[configTagName];

    if (!config) {
      throw new Error(`没有这个配置--${configTagName}`);
    }

    return config;
  }
}
