const { Ticket } = require("../models");

async function all(req, res) {
  const tickets = await Ticket.findAll();
  res.json(tickets);
}

module.exports = {
  all,
};
