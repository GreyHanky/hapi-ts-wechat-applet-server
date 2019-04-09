import { QueryInterface } from "sequelize";

export = {
  up: (queryInterface: QueryInterface, Sequelize) =>
    queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nick_name: Sequelize.STRING,
      avatar_url: Sequelize.STRING,
      gender: Sequelize.INTEGER,
      open_id: Sequelize.STRING,
      session_key: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    }),
  down: (queryInterface: QueryInterface) => queryInterface.dropTable("users")
};
