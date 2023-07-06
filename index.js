const express = require("express");
const cookieParser = require("cookie-parser");
const PORT = 8080;

const app = express();
require("./configs/mongoose");

const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./configs/passport-local-strategy");


app.set("view engine", "ejs");

app.use(session({
    name: "profiel",
    // TODO: change the secret before deployment on production
    secret: "QWEQWEQWEASD@#@#",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000*60*100,
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded());
app.use(cookieParser());
app.use("/", require("./routes"));


app.listen(PORT, () => {
    console.log("App is running on port: " + PORT);
});