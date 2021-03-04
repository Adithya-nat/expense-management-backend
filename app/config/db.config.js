module.exports = {
  HOST: "expense-management-backend.herokuapp.com",
  USER: "root",
  PASSWORD: "adithyA98",
  DB: "webapp_users",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};