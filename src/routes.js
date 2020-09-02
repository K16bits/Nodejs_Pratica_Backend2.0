const express = require('express');
const Router = express.Router();
const CRUD_controllers = require("./controllers/CRUD_Controllers.js")

Router.post("/send",CRUD_controllers.create)
Router.get("/receive",CRUD_controllers.receive)

module.exports = Router;