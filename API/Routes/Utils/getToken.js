const jwt = require('jsonwebtoken');

const getToken = (req,res,next) => {
    console.log("this is token");
    const authorization = req.get('authorization');
    console.log(authorization);
    
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        
        const decodedToken = jwt.verify(authorization.substring(7),process.env.SECRET);
        console.log(decodedToken.id);

        const { id } = decodedToken;
        req.id = id;

    }

    next();
    
}

module.exports = {
    getToken,
};