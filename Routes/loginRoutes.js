const { Router } = require("express");
const passport = require('passport');
const {signIn,signInGoogle} = require('./Controllers/login');
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/",signIn);

router.get("/google",passport.authenticate("google",{ scope: ['profile','email']}));

router.get("/oauth2/redirect/google",passport.authenticate("google",{
    failureMessage: "Cannot login to google, please try again later!",
    session: false,
}),(req,res) => {
    console.log(req);
    if(req.user){
        const token = jwt.sign({id:req.user.id},process.env.SECRET,{
            expiresIn:60*60*24 // one day
        });
        res.cookie('token',token);
        res.redirect(`${process.env.FRONTEND}/home`);
    }else{
        res.redirect(`${process.env.FRONTEND}/register`);
    }
});

module.exports = router;