const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const pontoController = require("./app/controllers/ponto/PontoController")
const usuarioController =  require("./app/controllers/usuario/UsuarioController")
const enderecoController =  require("./app/controllers/endereco/EnderecoController")
const usuario_has_pontoController =  require("./app/controllers/usuario_has_ponto/Usuario_has_pontoController")

const routes = new Router();

// ponto End-points
routes.post("/ponto", asyncHandler(pontoController.store));

routes.get("/ponto", asyncHandler(pontoController.index));

routes.put("/ponto/:id", asyncHandler(pontoController.update));

routes.get("/ponto/:id", asyncHandler(pontoController.findOne));

routes.delete("/ponto/:id", asyncHandler(pontoController.delete));

// usuario End-points
routes.post("/usuario", asyncHandler(usuarioController.store));

routes.get("/usuario", asyncHandler(usuarioController.index));

routes.put("/usuario/:id", asyncHandler(usuarioController.update));

routes.get("/usuario/:id", asyncHandler(usuarioController.findOne));

routes.delete("/usuario/:id", asyncHandler(usuarioController.delete));


// endereco End-points
routes.post("/endereco", asyncHandler(enderecoController.store));

routes.get("/endereco", asyncHandler(enderecoController.index));

routes.put("/endereco/:id", asyncHandler(enderecoController.update));

routes.get("/endereco/:id", asyncHandler(enderecoController.findOne));

routes.delete("/endereco/:id", asyncHandler(enderecoController.delete));

// usuario_has_ponto End-points
routes.post("/usuario_has_ponto", asyncHandler(usuario_has_pontoController.store));

routes.get("/usuario_has_ponto", asyncHandler(usuario_has_pontoController.index));

routes.put("/usuario_has_ponto/:id", asyncHandler(usuario_has_pontoController.update));

routes.get("/usuario_has_ponto/:id", asyncHandler(usuario_has_pontoController.findOne));

routes.delete("/usuario_has_ponto/:id", asyncHandler(usuario_has_pontoController.delete));

module.exports = routes;
