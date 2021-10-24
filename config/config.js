require('dotenv').config()
module.exports = {
  'development': {
    username: process.env.DB_USERNAME || "sql10446385",
    password: process.env.DB_PASSWORD || "ceBKwdhQRW",
    database: process.env.DB_DATABASE || "sql10446385",
    host: process.env.DB_HOST || "sql10.freesqldatabase.com",
    dialect: process.env.DB_DIALECT || "mysql",
  }
 
}