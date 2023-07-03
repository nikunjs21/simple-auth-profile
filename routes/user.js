const routes = require("express").Router();
const userController = require("../controllers/user_controller");

routes.get("/", userController.profile);
routes.post("/create", userController.create);

module.exports = routes;