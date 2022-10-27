const { Router } = require("express");
const passport = require('passport');
const {signIn,signInGoogle} = require('./Controllers/login');
const jwt = require("jsonwebtoken");

const router = Router();

const successLoginUrl = `${process.env.FRONTEND}/home`;
const errorLoginUrl = `${process.env.FRONTEND}/login`;

router.post("/",signIn);

router.get("/google",passport.authenticate("google",{ scope: ['profile','email']}));

router.get("/oauth2/redirect/google",passport.authenticate("google",{
    failureMessage: "Cannot login to google, please try again later!",
    //failureRedirect: errorLoginUrl,
    //successRedirect:successLoginUrl,
    session: false,
}),(req,res) => {
    console.log(req);
    console.log("req user",req.user);
    res.redirect(successLoginUrl);
});

module.exports = router;