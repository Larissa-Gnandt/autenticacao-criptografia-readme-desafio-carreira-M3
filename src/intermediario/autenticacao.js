const jwt = require("jsonwebtoken");
const senhaJwt = require("../jwtSecret");

const validarAutenticacao = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        mensagem: "O usuário não está autenticado",
      });
    }

    const token = authorization.split(" ")[1];
    const assinaturaToken = jwt.verify(token, senhaJwt);
    req.usuarioId = assinaturaToken.id;

    next();
  } catch (error) {
    return res.status(500).json({
      mensagem: error.message,
    });
  }
};

module.exports = {
  validarAutenticacao,
};
