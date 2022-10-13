const {profile,Op} = require('../../DataBase/db');
const bcrypt = require('bcryptjs');

const signIn = async (req,res) => {
    const {username, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 8);
    const user = await profile.findOne({
        where:{ name:username }
    });

    const passwordCorrect = user === null ? false : await bcrypt.compare(password,user.password);
    
    try{
        if(passwordCorrect){
            res.send("Welcome")
        }else{
            res.send("user or password incorrect");
        }
    }catch(err){
        res.send(err.message);
    }
};

module.exports = {
    signIn,
}