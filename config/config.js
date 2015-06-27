module.exports = {
  development: {
    username: "root",
    password: null,
    database: "minutes_development",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    database: process.env.DATABASE_NAME_TEST,
    username: process.env.DATABASE_MYSQL_USERNAME,
    password: process.env.DATABASE_MYSQL_PASSWORD,
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
