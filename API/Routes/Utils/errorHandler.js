const ERROR_HANDLER = {};

const errorHandler = (err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    if(err.name === 'JsonWebTokenError'){
        res.status(401).json({error:'token missing or invalid'});
    }

    if(err.name === 'TokenExpiredError'){
        res.status(401).json({error:'token Expired'});
    }

    
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
}

module.exports = {
    errorHandler,
}