const { Router } = require("express");
const router = Router();
const {signIn} = require('./Controllers/login');

router.post("/",signIn);

module.exports = router;