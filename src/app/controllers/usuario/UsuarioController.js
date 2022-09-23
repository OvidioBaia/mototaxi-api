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
      console.log(req.body);
      const { rua, bairro, numero, cidade, referencia  } = req.body;
      const responseAdress = await servicesEndereco.create(
        {
          rua: rua, 
          bairro: bairro, 
          numero: numero, 
          cidade: cidade, 
          referencia: referencia
        }
      )
      console.log('aqui', responseAdress.id);
      const { nome, sobrenome, email, senha, telefone, perfil  } = req.body;
      const user =  {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha,
        telefone: telefone,
        perfil: perfil,
        endereco_id: responseAdress.id   }
        console.log(user);
       await services.create(user);

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
      const id = req.params.id;
      console.log('aaa', req.body)
      const { nome, sobrenome, email, senha, telefone, perfil, endereco_id, ...attrs  } = req.body;
      const { rua, bairro, numero, cidade, referencia  } = attrs;
      const responseAdress = await servicesEndereco.update(endereco_id,
        {
          rua: rua, 
          bairro: bairro, 
          numero: numero, 
          cidade: cidade, 
          referencia: referencia
        }
      );
      console.log(responseAdress);
      const user =  {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha,
        telefone: telefone,
        perfil: perfil,
        endereco_id: endereco_id   }
        console.log(user);
       // await services.update(id,user);


      const updated = await services.update(id, user);
      console.log('aaaabbbb', updated);
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
      res.status(200).json(user);
    } catch (error) {
      responseError(res);
    }
  }
}

module.exports = new UsuarioController();
