const { Ticket } = require("../models");
const faker = require("faker");

faker.locale = "en";

module.exports = async () => {
  const tickets = [];
  tickets.push(
    {
      ticketId: "xk3d03",
      subject: "Hola, mi item esta roto",
      date: "2020-03-01 01:30:00Z",
      from: "Joaquin Perez",
      status: "SOLVED",
      body: "Mi producto llego roto, no funciona",
    },
    {
      ticketId: "xx35",
      subject: "Hola, mi item no llego",
      date: "2020-03-02 05:30:00Z",
      from: "Romina Esperanto",
      status: "NEW",
      body: "Mi producto no llegó, cuando debería",
    }
  );

  await Ticket.bulkCreate(tickets);
  console.log("[Database] Se corrió el seeder de Usuarios.");
};
