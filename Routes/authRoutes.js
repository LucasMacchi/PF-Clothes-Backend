const { Router } = require("express");
const {getUser} = require("./Controllers/getUser");
const {isUserAuthenticated} = require('./Utils/auth');

const router = Router();

router.get("/user",isUserAuthenticated,getUser);
router.get("/logout",(req,res)=>{
    if(req.user){
        res.logout();
        res.send("succes");
    }
});

module.exports = router;