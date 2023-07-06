const routes = require("express").Router();
const userController = require("../controllers/user_controller");

routes.get("/", userController.profile);
routes.post("/create", userController.create);
routes.post("/signIn", userController.createSession);

module.exports = routes;