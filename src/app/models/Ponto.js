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

module.exports = Ponto;
