const { Router } = require("express");
const {getUser} = require("./Controllers/getUser");
const {isUserAuthenticated} = require('./Utils/auth');

const router = Router();

router.get("/user",isUserAuthenticated,getUser);

module.exports = router;