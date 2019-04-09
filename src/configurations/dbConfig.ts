import configs from "./config";
import { Dialect } from "sequelize";

export default class DBconfig {
  public host: string;
  public port: number;
  public database: string;
  public username: string;
  public password: string;
  public dialect: Dialect;
  constructor() {
    const { host, port, database, username, password, dialect } = configs.get(
      "database"
    );
    this.host = host;
    this.port = port;
    this.database = database;
    this.username = username;
    this.password = password;
    this.dialect = dialect;
  }
}
