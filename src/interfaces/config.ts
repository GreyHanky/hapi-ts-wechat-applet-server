export interface IWeChatConifg {
  wxAppid: string;
  wxSecret: string;
}

export interface IServerConfigurations {
  port: number;
  host: string;
  plugins: string[];
  jwtSecret: string;
  jwtExpiration: string;
  routePrefix: string;
}

export interface IDataConfiguration {
  url: string;
}

export interface IConfig {
  database: object;
  weChat: object;
  server: object;
}
