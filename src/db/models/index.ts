import { Sequelize } from "sequelize-typescript";
import { IDBconfig } from "../../configurations";

export default (dbConfig: IDBconfig): Sequelize => {
  const { dialect, host, port } = dbConfig;
  const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      dialect,
      host,
      port
    }
  );
  sequelize.addModels([__dirname + "/*.model.*"]);
  return sequelize;
};
