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
    use_env_variable: "DATABASE_URL",
    uri: process.env.DATABASE_URL,
    dialect: "postgres",
    protocol: "postgres"
  }
}
