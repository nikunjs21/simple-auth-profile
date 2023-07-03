const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/simple_profile");

const db = mongoose.connection;

db.on("error",  console.error.bind(console, "Error connecting db"));

db.once("open", function(){
    console.log("db connected!");
});