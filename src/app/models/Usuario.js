const Sequelize = require("sequelize");

class Usuario extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      { 
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.STRING,
        telefone: Sequelize.STRING,
        perfil: Sequelize.STRING,
        endereco_id: Sequelize.INTEGER,    
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

Usuario.associate = (models) => {
  Usuario.belongsTo(models.Endereco, {
    foreignKey: "endereco_id",
    as: "endereco",
    targetKey: "id",
  });
}

module.exports = Usuario;
