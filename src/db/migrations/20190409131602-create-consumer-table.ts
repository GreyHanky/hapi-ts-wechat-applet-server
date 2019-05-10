import { QueryInterface } from "sequelize";

const tableName = "consumer";
export = {
  up: (queryInterface: QueryInterface, Sequelize:any) =>
    queryInterface.createTable(tableName, {
      consumer_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: Sequelize.INTEGER,
      type: Sequelize.STRING,
      amount: Sequelize.DECIMAL,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    }),
  down: (queryInterface: QueryInterface) => queryInterface.dropTable(tableName)
};
