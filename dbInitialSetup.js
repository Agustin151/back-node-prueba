const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/ticketSeeder")();

  console.log("[Database][End] ¡Los datos de prueba fueron insertados!\n");
};
