const dotenv = require('dotenv')

dotenv.config()

// export default {
module.exports = {

  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}`,
    port: process.env.POSTGRESQL_PORT,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}`,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}`,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
}
