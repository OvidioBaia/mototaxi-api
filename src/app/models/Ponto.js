const Sequelize = require("sequelize");

class Ponto extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      { 
        nome: Sequelize.STRING,
        latitude: Sequelize.DOUBLE,
        longitude: Sequelize.DOUBLE,
        endereco_id: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

Ponto.associate = (models) => {
  Ponto.belongsTo(models.Endereco, {
    foreignKey: "endereco_id",
    as: "endereco",
    targetKey: "id",
  });
}


module.exports = Ponto;
