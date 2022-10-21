const { Router } = require("express");
const passport = require('passport');
const {signIn,signInGoogle} = require('./Controllers/login');

const router = Router();

const successLoginUrl = "http://localhost:3000/login/success";
const errorLoginUrl = "http://localhost:3000/login/error";

router.post("/",signIn);

router.get("/google",passport.authenticate("google",{ scope: ['profile','email']}));
router.get("/oauth2/redirect/google",passport.authenticate("google",{
    failureMessage: "Cannot login to google, please try again later!",
    failureRedirect: errorLoginUrl,
    successRedirect:successLoginUrl,
}),
(req,res) => {
    console.log("User: ", req.user);
    res.send("Thank you for signing in!");
});
module.exports = router;