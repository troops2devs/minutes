module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db/development.sqlite"
  },
  test: {
    username: process.env.DATABASE_MYSQL_USERNAME,
    password: process.env.DATABASE_MYSQL_PASSWORD,
    database: process.env.DATABASE_NAME_TEST,
    dialect: "mysql",
    protocol: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
