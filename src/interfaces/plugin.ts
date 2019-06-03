import * as Hapi from "hapi";
import { IServerConfig, IDBconfig } from "configurations";

export interface IPluginOptions {
  database: IDBconfig;
  serverConfigs: IServerConfig;
}

export interface IPlugin {
  register(server: Hapi.Server, options?: IPluginOptions): Promise<void>;
  info(): IPluginInfo;
}

export interface IPluginInfo {
  name: string;
  version: string;
}
