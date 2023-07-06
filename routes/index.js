const routes = require("express").Router();
const userController = require("../controllers/user_controller");

routes.get("/sign-in", userController.signin);
routes.get("/signup", userController.signup);
routes.use("/user", require("./user"));

module.exports = routes;