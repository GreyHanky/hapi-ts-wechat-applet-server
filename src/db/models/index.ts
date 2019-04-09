import { Sequelize } from "sequelize-typescript";
import DBconfig from "../../configurations/dbConfig";

const configs = new DBconfig();

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
