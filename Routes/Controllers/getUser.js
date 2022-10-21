const getUser = async (req,res) => {
    res.json(req.user);
}

module.exports = {
    getUser
}