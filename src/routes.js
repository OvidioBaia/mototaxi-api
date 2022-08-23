const { Router } = require("express");
const asyncHandler = require("express-async-handler");
const pontoController = require("./app/controllers/ponto/PontoController")
const usuarioController =  require("./app/controllers/usuario/UsuarioController")

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



module.exports = routes;
