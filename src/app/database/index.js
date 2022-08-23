const Sequelize = require("sequelize");
const Ponto = require("../models/Ponto");
const Usuario = require("../models/Usuario");
const Endereco = require("../models/Endereco");
const Usuario_has_ponto = require("../models/Usuario_has_ponto");

const databaseConfig = require("../../config/database");

const models = [Ponto, Usuario, Endereco, Usuario_has_ponto];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
