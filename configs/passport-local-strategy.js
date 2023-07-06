const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async function (email, password, done) {
        const user = await User.findOne({email});
        if(user){
            if(user.password == password){
                delete user.password;
                return done(null, user);
            }else{
                console.log("Incorrect Password");
                return done(null, false);
            }
        }else{
            console.log("User not found: passport");
            return done(null, false);
        }
    }
  )
);

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(async function(id, done){
    const user = await User.findById(id);
    if(user){
        delete user.password;
        return done(null, user);
    }else{
        console.log("User not found: passport");
        return done(null, false);
    }
});

module.exports = passport;