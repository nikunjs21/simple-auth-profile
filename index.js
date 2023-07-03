const express = require("express");
const PORT = 8080;

const app = express();
require("./configs/mongoose");

app.set("view engine", "ejs");

app.use(express.urlencoded());
app.use("/", require("./routes"));


app.listen(PORT, () => {
    console.log("App is running on port: " + PORT);
});