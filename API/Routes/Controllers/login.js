const {profile,Op} = require('../../DataBase/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signIn = async (req,res) => {
    const {username, password } = req.body;

    const user = await profile.findOne({
        where:{ username:username }
    });

    const passwordCorrect = user === null ? false : await bcrypt.compare(password,user.password);

    try{

        const userDataforToken = {
            id:user.id,
            username:user.username
        }
        
        const token = jwt.sign(
            userDataforToken,
            process.env.SECRET,
            {expiresIn:60*60*24*7});

        res.send({
            username:user.username,
            token,
        });
        
    }catch(err){
        if(!(user && passwordCorrect)){
            res.status(401).json({
                error:"invalid user or password",
            })
        }
        res.send(err.message);
    }

};

module.exports = {
    signIn,
}