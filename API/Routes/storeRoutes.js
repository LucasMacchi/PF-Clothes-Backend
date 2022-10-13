const { Router } = require("express");
const router = Router();
const {profile,Op} = require('../DataBase/db');

router.get("/all", async (req,res) => {
    console.log(profile);
    const allStores = await profile.findAll({
        where:{
            storeName:{
                [Op.ne]:null,
            }
        }
    });
    try{
        res.send(allStores);
    }catch(err){
        res.send(err.message);
    }
});

module.exports = router;