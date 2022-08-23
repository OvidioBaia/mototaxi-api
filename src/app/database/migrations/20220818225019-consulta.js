const { sequelize } = require("../../models/Consulta");

/**
 * "id" SERIAL,
  "descricao" VARCHAR(45) NULL,
  "paciente_id" INT NOT NULL,
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const UsersTable = queryInterface.createTable("consulta", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      paciente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });

    return UsersTable;
  },

  down: (queryInterface) => queryInterface.dropTable("consulta"),
};
