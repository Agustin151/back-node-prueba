const express = require("express");
const ticketRoutes = express.Router();
const ticketController = require("../controllers/ticketController");

ticketRoutes.get("/", ticketController.all);

module.exports = ticketRoutes;
