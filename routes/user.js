const routes = require("express").Router();
const userController = require("../controllers/user_controller");
const passport = require("passport");

routes.get("/", userController.profile);
routes.post("/create", userController.create);
// routes.post("/signIn", userController.createSession);
routes.post("/signIn", passport.authenticate(
    'local',
    {
        failureRedirect: '/sign-in'
    }
), userController.createSession);
// routes.post("/signIn", {
//     failureRedirect: "/",

// }, userController.createSession);

module.exports = routes;