import { Sequelize } from "sequelize-typescript";
import { IDBconfig } from "../../configurations";

export default (database: IDBconfig): Sequelize => {
  const { dialect, host, port } = database;
  const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,
    {
      dialect,
      host,
      port
    }
  );
  sequelize.addModels([__dirname + "/*.model.*"]);
  return sequelize;
};
