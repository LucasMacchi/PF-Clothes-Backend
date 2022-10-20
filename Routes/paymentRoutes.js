const { Router } = require("express");
const router = Router();
const {payment} = require('./Controllers/payment');
const passport = require("passport");

router.get("/",passport.authenticate("jwt",{session:false}),payment);

module.exports = router;