import { QueryInterface } from "sequelize";

const tableName = "users";

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: DataTypes.IDatatypes) =>
    queryInterface.createTable(tableName, {
      user_id: {
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
  down: (queryInterface: QueryInterface) => queryInterface.dropTable(tableName)
};
