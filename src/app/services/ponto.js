const Ponto = require("../models/Ponto");

module.exports = {
  async create(data) {
    Ponto.create(data);
  },

  async delete(id) {
    const deleted = await Ponto.destroy({
      where: { id: id },
    });

    return deleted;
  },

  async findOne(id) {
    const Ponto = await Ponto.findOne({
      where: { id: id },
    });

    return Ponto;
  },

  async findOneByEmail(email) {
    const Ponto = await Ponto.findOne({
      where: { email: email },
    });

    return Ponto;
  },

  async update(id, data) {
    const response = await Ponto.update(data, {
      where: { id: id },
    });

    return response;
  },

  async list() {
    const Pontos = await Ponto.findAll();

    return Pontos;
  },
};
