const {profile,Op} = require('../../DataBase/db');

const getAllStores = async (req,res) => {

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