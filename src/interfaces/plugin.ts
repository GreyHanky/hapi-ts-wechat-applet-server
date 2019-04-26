import * as Hapi from "hapi";
import { IServerConfig } from "../configurations";

export interface IPluginOptions {
  // database: IDataConfiguration;
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
