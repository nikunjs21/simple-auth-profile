const User = require("../models/user");

module.exports.signin = function(req, res){
    const {user_id} = req.cookies;
    if(user_id){
        return res.redirect("/user");
    }
    return res.render("signin");
};

module.exports.createSession = async function(req, res){
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    console.log(user);
    if(user){
        res.cookie("user_id", user._id);
        return res.redirect("/user");
    }else{
        return res.redirect("back");
    }
};

module.exports.signup = function(req, res){
    return res.render("signup");
};
module.exports.create = async function(req, res){
    const pass = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    try{
        const user = await User.create({
            name, email, password: pass,
        });
        console.log("user created", user);
    }catch(err){
        console.error("error creating user", err);
    }
    return res.redirect("/");
};
module.exports.profile = function(req, res){
    return res.end("profile");
};