const pontoService = require("../../services/ponto");
const userService = require("../../services/usuario");
const enderecoService = require("../../services/endereco")
const services = require("../../services/usuario_has_ponto");
const responseErrorMessage = require("../../utils/responseErrorMessage");
const errorMessage = require("../../utils/responseErrorMessage");

function responseError(res) {
  return res.status(500).json({ res: errorMessage.res });
}

class Usuario_has_pontoController {
  async store(req, res, next) {
    try {
      console.log(req.body);
      console.log(req.body);
      const { pontoId } = req.body;
      const { rua, bairro, numero, cidade, referencia  } = req.body;
      const responseAdress = await enderecoService.create(
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
        endereco_id: responseAdress.id
      }
      console.log(user);
      const u = await userService.create(user);
      await services.create({usuario_id: u.id, ponto_id: pontoId});
      return res.status(201).json({ res: "Usuario_has_ponto criado com sucesso" });
    } catch (error) {
      console.log(error);
      responseError(res);
    }
  }

  async index(req, res, next) {
    try {
      let { ponto } = req.query
      
      const pontos = await pontoService.findOneByName(ponto)
      const usersPontos = await services.findByPontoId(pontos.id);
      if(!usersPontos.length) {
        return res.status(404).json({res: "Não existe ponto associado"});
      }
      let userAarray = []
      for (const iterator of usersPontos) {
        console.log('eyy', iterator);
        userAarray.push(...await userService.findById(iterator.usuario_id))
      }

      return await res.status(200).json(userAarray);
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
      // duvida posso atulizar os dados do usuario e o ponto 
      //ou so a tabela relação de ponto-taxi
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

  async taxiForPoint(req, res, next) {
    try {
      console.log('eyy');
      const id= req.params.id
      console.log('eyy', id);
      const ponto = await pontoService.findOne(id)
      const usersPontos = await services.findByPontoId(ponto.id);
      if(!usersPontos.length) {
        return res.status(404).json({res: "Não existe ponto associado"});
      }
      let userAarray = []
      for (const element of usersPontos) {
        console.log('eyy', element);
        userAarray.push(...await userService.findById(element.usuario_id))
      }
      console.log(userAarray);
      return await res.status(200).json(userAarray);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ res: responseErrorMessage.res });
    }
  }
}

module.exports = new Usuario_has_pontoController();
