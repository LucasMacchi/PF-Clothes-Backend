const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const {profile} = require('../DataBase/db');

const GOOGLE_CALLBACK_URL = "http://localhost:3001/login/oauth2/redirect/google";

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:GOOGLE_CALLBACK_URL,
    passReqToCallback:true,
},
async (req,accesToken,refreshToken,gProfile,cb) => {
    console.log(gProfile);
    const defaultUser = {
        name: `${gProfile.name.givenName} ${gProfile.name.familyName}`,
        username: gProfile.emails[0].value,
        password: gProfile.id,
        mail: gProfile.emails[0].value,
        profilePicture: gProfile.photos[0].value,
        googleId: gProfile.id, 
        phone:'111111111',
    }

    const user = await profile.findOrCreate({
        where:{
            googleId:gProfile.id,
        },
        defaults: defaultUser,
    }).catch((err) => {
        console.log("Error signing up",err);
        cb(err,null);
    });

    if(user) return cb(null, user && user[0]);

}));

passport.serializeUser((user, cb) => {
    console.log("Serializing user:",user);
    cb(null,user.id);
});

passport.deserializeUser(async (id,cb) => {
    const user = await profile.findOne({ where: {id} }).catch((err) => {
        console.log("Error deserializing",err);
        cb(err,null);
    });

    console.log("Deserialized user",user);

    if(user) cb(null,user)
});