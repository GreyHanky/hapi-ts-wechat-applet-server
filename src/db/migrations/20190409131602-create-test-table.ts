import { QueryInterface } from "sequelize";

export = {
  up: (queryInterface: QueryInterface, Sequelize) =>
    queryInterface.createTable("consumer", {
      consumer_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: Sequelize.INTEGER,
      type: Sequelize.STRING
      // amount:
    }),
  down: (queryInterface: QueryInterface) => queryInterface.dropTable("consumer")
};
