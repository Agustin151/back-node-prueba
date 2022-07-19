require("dotenv").config();
const mysql2 = require("mysql2");
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: prueba_tecnica
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysq
    dialectModule: mysql2,
    logging: false, // myslq2, postgres(pg), tipo de tecnologia que use la DB.
  }
);

const Ticket = require("./Tikect")(sequelize, Model, DataTypes);

module.exports = {
  sequelize,
  Ticket,
};
