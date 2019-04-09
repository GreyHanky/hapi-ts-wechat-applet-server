import Configs from "./config";

export default class ServerConfig {
  public host: string;
  public port: number;
  public jwtSecret: string;
  public jwtExpiration: string;
  public routePrefix: string;
  public plugins: string[];
  constructor() {
    const { host, port, jwtSecret, jwtExpiration, routePrefix, plugins } = Configs.get<ServerConfig>(
      "server"
    );
    this.host = host;
    this.port = port;
    this.jwtSecret = jwtSecret;
    this.jwtExpiration = jwtExpiration;
    this.routePrefix = routePrefix;
    this.plugins = plugins;
  }
}