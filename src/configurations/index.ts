import * as nconf from "nconf";
import * as path from "path";
import {
  IDataConfiguration,
  IServerConfigurations,
  IWeChatConifg
} from "../interfaces/config";

const configs = new nconf.Provider({
  env: true,
  argv: true,
  store: {
    type: "file",
    file: path.join(
      __dirname,
      `../../config.${process.env.NODE_ENV || "dev"}.json`
    )
  }
});

export function getDatabaseConfig(): IDataConfiguration {
  return configs.get("database");
}

export function getServerConfigs(): IServerConfigurations {
  return configs.get("server");
}

export function getWeChatConfigs(): IWeChatConifg {
  return configs.get("weChat");
}
