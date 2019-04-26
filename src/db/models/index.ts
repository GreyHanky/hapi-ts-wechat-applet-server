import { Sequelize } from "sequelize-typescript";
import { Config, IDBconfig } from "../../configurations";

const configs = Config.get<IDBconfig>("database");
export default (): Sequelize => {
  const { dialect, host, port } = configs;
  const sequelize = new Sequelize(
    configs.database,
    configs.username,
    configs.password,
    {
      dialect,
      host,
      port
    }
  );
  sequelize.addModels([__dirname + "/*.model.*"]);
  return sequelize;
};
