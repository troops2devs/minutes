module.exports = {
  development: {
    username: "root",
    password: null,
    database: "minutes_development",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: process.env.DATABASE_MYSQL_USERNAME,
    password: process.env.DATABASE_MYSQL_PASSWORD,
    database: process.env.DATABASE_NAME_TEST,
    dialect: "mysql",
    host: "127.0.0.1",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
