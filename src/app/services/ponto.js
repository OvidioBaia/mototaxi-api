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
    const ponto = await Ponto.findOne({
      where: { id: id },
    });

    return ponto;
  },

  async findOneByEmail(email) {
    const ponto = await Ponto.findOne({
      where: { email: email },
    });

    return ponto;
  },

  async findOneByName(nome) {
    const ponto = await Ponto.findOne({
      where: { nome: nome },
    });

    return ponto;
  },

  async update(id, data) {
    const response = await Ponto.update(data, {
      where: { id: id },
    });

    return response;
  },

  async list(filtro) {
    let pontos;
    if (filtro) {
      pontos = await Ponto.findAll({where: { endereco_id: filtro}});  
    }
    else {
      pontos = await Ponto.findAll();
    }
    
    return pontos;
  },
};
