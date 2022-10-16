const jwt = require('jsonwebtoken');

const getToken = (req,res,next) => {
    const authorization = req.get('authorization');
    
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        // verifica token
        const decodedToken = jwt.verify(authorization.substring(7),process.env.SECRET);
        // pasa id del usuario en el token al request
        const { id } = decodedToken;
        req.id = id;

    }

    next();
    
}

module.exports = {
    getToken,
};