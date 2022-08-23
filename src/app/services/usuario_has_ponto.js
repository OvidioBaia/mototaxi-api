const Usuario_has_ponto = require("../models/Usuario_has_ponto");

module.exports = {
  async create(data) {
    Usuario_has_ponto.create(data);
  },

  async delete(id) {
    const deleted = await Usuario_has_ponto.destroy({
      where: { id: id },
    });

    return deleted;
  },

  async findOne(id) {
    const Usuario_has_ponto = await Usuario_has_ponto.findOne({
      where: { id: id },
    });

    return Usuario_has_ponto;
  },

  async findOneByEmail(email) {
    const Usuario_has_ponto = await Usuario_has_ponto.findOne({
      where: { email: email },
    });

    return Usuario_has_ponto;
  },

  async update(id, data) {
    const response = await Usuario_has_ponto.update(data, {
      where: { id: id },
    });

    return response;
  },

  async list() {
    const Usuario_has_pontos = await Usuario_has_ponto.findAll();

    return Usuario_has_pontos;
  },
};
