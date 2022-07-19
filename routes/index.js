const express = require("express");
const apiRoutes = express.Router();
const ticketRoutes = require("./ticketRoutes");

apiRoutes.use("/tickets", ticketRoutes);

module.exports = (app) => {
  app.use("/api", apiRoutes);
};
