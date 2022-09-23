const Usuario_ponto = require("../models/Usuario_has_ponto");

module.exports = {
  async create(data) {
    Usuario_ponto.create(data);
  },

  async delete(id) {
    const deleted = await Usuario_ponto.destroy({
      where: { id: id },
    });

    return deleted;
  },

  async findOne(id) {
    const usuario_ponto = await Usuario_ponto.findOne({
      where: { id: id },
    });

    return usuario_ponto;
  },

  async findOneByEmail(email) {
    const usuario_ponto = await Usuario_ponto.findOne({
      where: { email: email },
    });

    return usuario_ponto;
  },

  async update(id, data) {
    const response = await Usuario_ponto.update(data, {
      where: { id: id },
    });

    return response;
  },

  async list() {
    const usuario_pontos = await Usuario_ponto.findAll();

    return usuario_pontos;
  },

  async findByPontoId(pontoId) {
    const usuario_pontos = await Usuario_ponto.findAll({where: { ponto_id: pontoId}});

    return usuario_pontos;
  },
};
