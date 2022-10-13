const {profile,Op} = require('../../DataBase/db');
const bcrypt = require('bcryptjs');

const signIn = async (req,res) => {
    const {username, password } = req.body;

    const user = await profile.findOne({
        where:{ name:username }
    });

    const passwordCorrect = user === null ? false : await bcrypt.compare(password,user.password);

    try{
        if(passwordCorrect){
            res.send("Welcome");
        }else{
            res.status(403).json({
                error:"invalid user or password",
            })
        }
    }catch(err){
        res.send(err.message);
    }
};

module.exports = {
    signIn,
}