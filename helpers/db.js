require('dotenv').config();
const mysql = require('mysql2');
const environtment = require('./environtment');
const connection = mysql.createPool({
  host:environtment.dbHost,
  user: environtment.dbUser,
  password: environtment.dbPassword,
  database: environtment.dbName,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
});

module.exports = connection;