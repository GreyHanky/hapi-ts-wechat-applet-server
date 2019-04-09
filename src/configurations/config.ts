import CreateConfig from "./configPrivider";

class Config {
  private serverConfigs = new CreateConfig("../../config.json");
  private dbConfigs = new CreateConfig("../../db_config.json");

  public get<T>(configName: string): T {

    switch (configName) {
      case "weChat":
        return this.serverConfigs.get<T>("weChat");

      case "server":
        return this.serverConfigs.get<T>("server");

      case "database":
        return this.dbConfigs.config;

      default:
        throw new Error(`没有这个配置--${configName}`);
        break;
    }
  }
}

export default new Config();
