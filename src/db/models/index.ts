import { Sequelize } from "sequelize-typescript";
import { getDatabaseConfig } from "../../configurations";

const { url } = getDatabaseConfig();

export default (): Sequelize => {
  const sequelize = new Sequelize(url);
  sequelize.addModels([__dirname + "/*.model.*"]);
  return sequelize;
};
