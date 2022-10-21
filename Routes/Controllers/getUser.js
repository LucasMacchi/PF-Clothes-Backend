const getUser = async (req,rest) => {
    res.json(req.user);
}

module.exports = {
    getUser
}