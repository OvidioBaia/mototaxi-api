const Endereco = require("../models/Endereco");

module.exports = {
  async create(data) {
   return Endereco.create(data);
  },

  async delete(id) {
    const deleted = await Endereco.destroy({
      where: { id: id },
    });

    return deleted;
  },

  async findOne(id) {
    const endereco = await Endereco.findOne({
      where: { id: id },
    });

    return endereco;
  },
  

  async findOneByEmail(email) {
    const Endereco = await Endereco.findOne({
      where: { email: email },
    });

    return Endereco;
  },

  async update(id, data) {
    console.log("aaquiiii", id);
    const response = await Endereco.update(data, {
      where: { id: id },
    });

    return response;
  },

  async list() {
    const Enderecos = await Endereco.findAll();

    return Enderecos;
  },
};
