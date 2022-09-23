const Sequelize = require('sequelize')
const Ponto = require('./Ponto')

class Usuarios_ponto extends Sequelize.Model {
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

Usuarios_ponto.associate = (models) => {
  Usuarios_ponto.belongsTo(models.Usuario, {
    foreignKey: "usuario_id",
    as: "usuario",
    targetKey: "id",
  });
  Usuarios_ponto.belongsTo(Ponto, {
    foreignKey: "ponto_id",
    as: "ponto",
    targetKey: "id",
  });
}
  


module.exports = Usuarios_ponto;
