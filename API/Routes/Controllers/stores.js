const {profile,Op} = require('../../DataBase/db');
const {getToken} = require('../Utils/getToken');
const jwt = require('jsonwebtoken');

const getAllStores = async (req,res,next) => {

    
   try{
        // test using jwt token auth
        //const token = getToken(req);
        //const decodedToken = jwt.verify(token,process.env.SECRET);
        //console.log(decodedToken.id);

        const allStores = await profile.findAll({
            where:{
                storeName:{
                        [Op.ne]:null,
                }
            }
        });

        res.send(allStores);

    }catch(err){

        next(err);

    }
}

const getStoreByName = async (req,res) => {
    
    let {name} = req.params;

    const store = await profile.findAll({
        where:{
            storeName:name,
        }
    });

    try{
        res.send(store);
    }catch(err){
        res.send(err.message);
    }
}

module.exports = {
    getAllStores,
    getStoreByName,
};