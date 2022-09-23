const Usuario = require("../models/Usuario");
const enderecoServices = require("../services/endereco")

module.exports = {
  async validateUser({ email, senha }) {
    console.log('aaa',email);

    console.log('aaa',senha);
    let user = null;
    const userFound = await Usuario.findOne({
      where: { email: email, senha: senha },
    });
    const endereco = await enderecoServices.findOne(userFound.endereco_id);
    // console.log('qqqqqq', hasLogin);

    // if (hasLogin) {
    //   currentUser = await Usuario.findOne({
    //     where: { senha: senha },
    //   });
    //   if (currentUser) {
    //     user = currentUser;
    //   }
    // }
    user = userFound
    return {user, endereco};
  },
};
