module.exports = {
  development: {
    database: "minutes_development",
    dialect: "postgres"
  },
  test: {
    database: process.env.DATABASE_NAME_TEST,
    username: process.env.DATABASE_POSTGRESQL_USERNAME,
    password: process.env.DATABASE_POSTGRESQL_PASSWORD,
    dialect: "postgres",
  },
  production: {
    database: "database_production",
    dialect: "postgres"
  }
}
