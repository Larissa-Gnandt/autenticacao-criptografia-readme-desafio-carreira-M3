const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: "projeto_desafio_carreira",
});

const query = (text, param) => {
  return pool.query(text, param);
};

module.exports = {
  query,
};
