const {profile,Op} = require('../../DataBase/db');

const getAllStores = async (req,res,next) => {

    
   try{
        
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