const services = require("../../services/usuario");
const servicesEndereco = require("../../services/endereco");
const responseErrorMessage = require("../../utils/responseErrorMessage");
const errorMessage = require("../../utils/responseErrorMessage");

function responseError(res) {
  return res.status(500).json({ res: errorMessage.res });
}

class UsuarioController {
  async store(req, res, next) {
    try {

      const responseAdress = await servicesEndereco.create({rua: req.body.rua, bairro: req.body.bairro, numero: req.body.numero, cidade: req.body.cidade, referencia: req.body.referencia})
      const response = await services.create({...req.body, endereco_id: responseAdress.id});

      return res.status(201).json({ res: "Usuario criado com sucesso" });
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
      const idUsuario = req.params.id;

      const deleted = await services.delete(idUsuario);
      if (deleted) {
        return res.status(200).json({ res: "Usuario excluido com sucesso" });
      }
    } catch (error) {
      responseError(res);
    }
  }

  async update(req, res, next) {
    try {
      const idUsuario = req.params.id;

      const [updated] = await services.update(idUsuario, req.body);
      if (updated) {
        return res.status(200).json({ res: "Usuario atualizado com sucesso" });
      }
    } catch (error) {
      responseError(res);
    }
  }

  async findOne(req, res, next) {
    try {
      const idUsuario = req.params.id;
      const user = await services.findOne(idUsuario);
      res.status(200).json({ res: user });
    } catch (error) {
      responseError(res);
    }
  }
}

module.exports = new UsuarioController();
