import { Dialect } from "sequelize";
import Config from "./config";

export interface IDBconfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  dialect: Dialect;
}

export interface IServerConfig {
  host: string;
  port: number;
  jwtSecret: string;
  jwtExpiration: string;
  routePrefix: string;
  plugins: string[];
}

export interface IWeChatConfig {
  wxAppid: string;
  wxSecret: string;
}

export { Config };
