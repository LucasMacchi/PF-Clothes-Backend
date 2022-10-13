const { Router } = require("express");
var bcrypt = require("bcryptjs");
const { profile } = require("../DataBase/db");
const router = Router();

router.post("/", async (req, res) => {
  const {
    name,
    mail,
    password,
    phone,
    storeName,
    banner,
    profilePicture,
    location,
    favorites,
    shoppingCart,
  } = req.body;

  let passwordHash = await bcrypt.hash(password, 8);

  if (!favorites) favorites === [];
  if (!shoppingCart) shoppingCart === [];

  try {
    let [user, created] = await profile.findOrCreate({
      where: {
        name,
        mail,
        password: passwordHash,
        phone,
        storeName,
        banner,
        profilePicture,
        location,
        favorites,
        shoppingCart,
      },
    });
    return res.send(user);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
