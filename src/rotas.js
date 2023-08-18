const express = require("express");
const { login } = require("./controladores/login");
const { cadastrar, detalharUsuario } = require("./controladores/usuario");
const { validarAutenticacao } = require("./intermediario/autenticacao");

const rotas = express();

rotas.post("/usuario", cadastrar);
rotas.post("/login", login);

rotas.use(validarAutenticacao);

rotas.get("/usuarios", detalharUsuario);

module.exports = rotas;
