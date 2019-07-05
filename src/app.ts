import * as Server from "./server";
import { Config, IServerConfig, IDBconfig } from "./configurations";
import { IPluginOptions } from "./interfaces/plugin";

const start = async (configs: IPluginOptions) => {
  try {
    const server = await Server.init(configs);
    await server.start();
  } catch (err) {
    console.error("Error starting server: ", err.message);
    throw err;
  }
};

const serverConfigs = Config.server;
const database = Config.database;

start({ serverConfigs, database });
