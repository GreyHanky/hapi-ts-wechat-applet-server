import * as Hapi from "hapi";
import { ServerConfig } from "../configurations";

export interface IPluginOptions {
  // database: IDataConfiguration;
  serverConfigs: ServerConfig;
}

export interface IPlugin {
  register(server: Hapi.Server, options?: IPluginOptions): Promise<void>;
  info(): IPluginInfo;
}

export interface IPluginInfo {
  name: string;
  version: string;
}
