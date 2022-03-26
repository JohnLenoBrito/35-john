const mysql = require('mysql')

const createDBConnection = () => {
  return mysql.createConnection({
    host: process.env.NODE_DB_HOST,
    user: process.env.NODE_DB_USER,
    password: process.env.NODE_DB_PASS,
    database: process.env.NODE_DB
  })
}

module.exports = () => {
  return createDBConnection
}
