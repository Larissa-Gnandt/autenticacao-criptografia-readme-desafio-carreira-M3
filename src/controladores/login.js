const { query } = require("../banco-de-dados/conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaJwt = require("../jwtSecret");

const login = async (req, res) => {
  try {
    let { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        mensagem:
          "Valide se está informando as propriedades obrigatórias: email e senha",
      });
    }

    let data = await query("select * from usuarios where email = $1", [email]);

    if (data.rowCount == 0) {
      return res.status(400).json({
        mensagem: "E-mail não encontrado",
      });
    }

    let usuario = data.rows[0];

    if (!(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(400).json({
        mensagem: "Usuário ou senha inválidos",
      });
    }

    let { senha: senhaUsuario, ...usuarioSemSenha } = usuario;

    const token = jwt.sign(
      {
        id: usuarioSemSenha.id,
      },
      senhaJwt,
      {
        expiresIn: "2h",
      }
    );

    return res.status(200).json({
      usuario: usuarioSemSenha,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      mensagem: error.message,
    });
  }
};

module.exports = {
  login,
};
