require('dotenv').config({ path: '../../.env' });
let mysql = require('mysql2');

let con = mysql.createConnection({
  host: process.env.DB_HOST,         // Apenas o endereço, sem "mysql://"
  user: process.env.DB_USER,              // Usuário padrão
  password: process.env.DB_PASSWORD,              // Deixe vazio já que não tem senha
  database: process.env.DB_NAME  // O nome do banco entra aqui separadamente
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
