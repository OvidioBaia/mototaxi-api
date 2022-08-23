const Sequelize = require("sequelize");

class Usuario_has_ponto extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      { 
        usuario_id: Sequelize.NUMBER,
        ponto_id: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

Usuario_has_ponto.associate = (models) => {
  Usuario_has_ponto.belongsTo(models.Usuario, {
    foreignKey: "usuario_id",
    as: "usuario",
    targetKey: "id",
  });
  Usuario_has_ponto.belongsTo(models.Ponto, {
    foreignKey: "ponto_id",
    as: "ponto",
    targetKey: "id",
  });
}


module.exports = Usuario_has_ponto;
