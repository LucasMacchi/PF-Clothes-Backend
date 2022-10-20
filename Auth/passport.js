const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const {profile} = require("../DataBase/db");

passport.use(new StrategyJwt({ 
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(), 
    secretOrKey: process.env.SECRET,
 },
 function (jwtPayload, done){
    return profile.findOne({ 
        where:{
            id: jwtPayload.id
        }
    }).then((user) => {
        return done(null,user);
    }).catch((err) => {
        return done(err);
    });
 })
);