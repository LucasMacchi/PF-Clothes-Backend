const {profile,Op} = require('../../DataBase/db');
const bcrypt = require('bcryptjs');

const signIn = async (req,res) => {
    const {username, password } = req.body;
    const createdUser = await profile.findOne({name:username});
    try{
        res.send(createdUser);
    }catch(err){
        res.send(err.message);
    }
};

module.exports = {
    signIn,
}