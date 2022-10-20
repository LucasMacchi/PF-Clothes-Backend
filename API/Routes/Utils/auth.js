const isUserAuthenticated = (req,res,next) => {
    if(req.user){
        next();
    }else{
        res.status(401).send("you must login first");
    }
}

module.exports = {
    isUserAuthenticated,
}