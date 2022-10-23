const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {profile} = require('../DataBase/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const GOOGLE_CALLBACK_URL = "http://localhost:3001/login/oauth2/redirect/google";

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:GOOGLE_CALLBACK_URL,
    passReqToCallback:true,
},
async (req,accesToken,refreshToken,gProfile,done) => {
    /*console.log("gprofile: ",gProfile);
    console.log("req ", req);
    console.log("acces token",accesToken);
    console.log("refresh token",refreshToken);
    console.log("cb",cb);*/
    

    try{
        let existingUser = await profile.findOne({
            where:{
                'googleId':gProfile.id
            }
        });
        if(existingUser){
            return done(null,existingUser);
        }

        console.log('Creating new user ...');

        const newUser = await profile.create({
            name: `${gProfile.name.givenName} ${gProfile.name.familyName}`,
            username: gProfile.emails[0].value,
            password: gProfile.id,
            mail: gProfile.emails[0].value,
            profilePicture: gProfile.photos[0].value,
            googleId: gProfile.id, 
            phone:'111111111',
        });

        console.log(newUser);

        return done(null,newUser);

    } catch (error){
        return done(error,false);
    }

    

    /*const defaultUser = {
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
        done(err,null);
    });

    console.log("user created",user);

    if(user) return done(null, user && user[0]);*/

    

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