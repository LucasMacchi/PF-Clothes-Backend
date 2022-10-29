const { Router } = require("express");
const {getUser} = require("./Controllers/getUser");
const {isUserAuthenticated} = require('./Utils/auth');
const {profile} = require('../DataBase/db');
const jwt = require('jsonwebtoken');

const router = Router();

router.get("/user",isUserAuthenticated,getUser);
router.get("/logout",(req,res)=>{
    if(req.user){
        req.logout();
        res.send("succes");
    }
});

router.post("/forgot-password",async (req,res)=>{
    const {email} = req.body;
    try{
        const oldUser = await profile.findOne({
            where:{
                mail:email,
            }
        });
        if(!oldUser){
            return res.send("User Not Exist!!");
        }
        const secret =  process.env.SECRET + oldUser.password;
        const token =  jwt.sign({email:oldUser.mail, id:oldUser.id},secret,{expiresIn:'2h'});
        const link = `http://localhost:3001/auth/reset-password/${oldUser.id}/${token}`;
        console.log(link);
        res.send("link");
    }catch(error){
        res.send(err.message);
    }
});

router.get('/reset-password/:id/:token', async (req,res)=>{
    const {id,token} = req.params;
    console.log(req.params);
    const oldUser =  await profile.findOne({
        where:{
            id:id,
        }
    });
    if(!oldUser){
        return res.send("User Not Exist!!");
    }
    const secret = process.env.SECRET + oldUser.password;
    try{
        const verify = jwt.verify(token,secret);
        //res.json({email:verify.email});
        res.redirect(`${process.env.FRONTEND}/reset?user=${oldUser.id}`);
    }catch(err){
        res.send("not verified");
    }
});

module.exports = router;