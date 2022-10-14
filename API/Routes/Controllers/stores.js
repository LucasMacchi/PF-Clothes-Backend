const {profile,Op} = require('../../DataBase/db');
const {getToken} = require('../Utils/getToken');
const jwt = require('jsonwebtoken');

const getAllStores = async (req,res) => {

    

    try{

        const token = getToken(req);
        const decodedToken = jwt.verify(token,process.env.SECRET);

        const allStores = await profile.findAll({
            where:{
                storeName:{
                        [Op.ne]:null,
                }
            }
        });
        res.send(allStores);
    }catch(err){
        res.status(401).json({error:'token missing or invalid'});
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