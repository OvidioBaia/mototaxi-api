const services = require("../../services/endereco");
const responseErrorMessage = require("../../utils/responseErrorMessage");
const errorMessage = require("../../utils/responseErrorMessage");

function responseError(res) {
  return res.status(500).json({ res: errorMessage.res });
}

class EnderecoController {
  async store(req, res, next) {
    try {
      await services.create(req.body);
      return res.status(201).json({ res: "Endereco criado com sucesso" });
    } catch (error) {
      responseError(res);
    }
  }

  async index(req, res, next) {
    try {
      const users = await services.list();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ res: responseErrorMessage.res });
    }
  }

  async delete(req, res, next) {
    try {
      const idEndereco = req.params.id;

      const deleted = await services.delete(idEndereco);
      if (deleted) {
        return res.status(200).json({ res: "Endereco excluido com sucesso" });
      }
    } catch (error) {
      responseError(res);
    }
  }

  async update(req, res, next) {
    try {
      const idEndereco = req.params.id;

      const isUpdate = await services.update(idEndereco, req.body);

      if (isUpdate[0] === 1) {
        return res.status(200).json({ res: "Endereco atualizado com sucesso" });
      }
    } catch (error) {
      console.log(error);
      responseError(res);
    }
  }

  async findOne(req, res, next) {
    try {
      const id = req.params.id;
      console.log(id)
      const endereco = await services.findOne(id);
      res.status(200).json(endereco);
    } catch (error) {
      responseError(res);
    }
  }
}

module.exports = new EnderecoController();
