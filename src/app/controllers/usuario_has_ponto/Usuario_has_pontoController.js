const services = require("../../services/usuario_has_ponto");
const responseErrorMessage = require("../../utils/responseErrorMessage");
const errorMessage = require("../../utils/responseErrorMessage");

function responseError(res) {
  return res.status(500).json({ res: errorMessage.res });
}

class Usuario_has_pontoController {
  async store(req, res, next) {
    try {
      await services.create(req.body);
      return res.status(201).json({ res: "Usuario_has_ponto criado com sucesso" });
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
      const idUsuario_has_ponto = req.params.id;

      const deleted = await services.delete(idUsuario_has_ponto);
      if (deleted) {
        return res.status(200).json({ res: "Usuario_has_ponto excluido com sucesso" });
      }
    } catch (error) {
      responseError(res);
    }
  }

  async update(req, res, next) {
    try {
      const idUsuario_has_ponto = req.params.id;

      const isUpdate = await services.update(idUsuario_has_ponto, req.body);

      if (isUpdate[0] === 1) {
        return res.status(200).json({ res: "Usuario_has_ponto atualizado com sucesso" });
      }
    } catch (error) {
      console.log(error);
      responseError(res);
    }
  }

  async findOne(req, res, next) {
    try {
      const idUsuario_has_ponto = req.params.id;
      const user = await services.findOne(idUsuario_has_ponto);
      res.status(200).json({ res: user });
    } catch (error) {
      responseError(res);
    }
  }
}

module.exports = new Usuario_has_pontoController();
