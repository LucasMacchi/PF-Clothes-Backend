const { Router } = require("express");
const passport = require('passport');
const {signIn,signInGoogle} = require('./Controllers/login');

const router = Router();

const successLoginUrl = "http://localhost:3000/home";
const errorLoginUrl = "http://localhost:3000/login/error";

router.post("/",signIn);

router.get("/google",passport.authenticate("google",{ scope: ['profile','email']}));
router.get("/oauth2/redirect/google",passport.authenticate("google",{
    failureMessage: "Cannot login to google, please try again later!",
    failureRedirect: errorLoginUrl,
    successRedirect:successLoginUrl,
    session: true,
}),
(req,res) => {
    console.log("despues de ir a google");
    console.log(res);
    res.redirect(successLoginUrl);
});
module.exports = router;