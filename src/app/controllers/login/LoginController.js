const services = require("../../services/login");
const jwt = require("jsonwebtoken");
const errorMessage = require("../../utils/responseErrorMessage");

function responseError(res) {
  return res.status(500).json({ res: errorMessage.res });
}

class LoginController {
  async Login(req, res, next) {
    try {
      const secretToken = "teste458@fg";

      const {user, endereco } = await services.validateUser({
        email: req.body.email,
        senha: req.body.senha,
      });

      //falta retorna o tipo
      if (user !=  null) {
        const token = jwt.sign(
          { user: user },
          secretToken,
          {
            expiresIn: "48h",
          }
        );
        // console.log(hasCurrentUser);
        return res
          .status(200)
          .json({ res: { user, token, endereco } });
      } else {
        return res.status(401).json({ res: "email ou senha inválido(s)" });
      }
    } catch (error) {
      console.log("error", error);
      responseError(res);
    }
  }
}

module.exports = new LoginController();
