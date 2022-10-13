const { Router } = require("express");
var bcrypt = require("bcryptjs");
const { profile } = require("../DataBase/db");
const router = Router();

router.post("/", async (req, res) => {
  let {
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

  if (!favorites) favorites = [];
  if (!shoppingCart) shoppingCart = [];

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

//Traer datos de un usuario
router.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let user = await profile.findByPk(id);
    return res.send(user);
  } catch (err) {
    res.send(err.message);
  }
});

//Modificar datos de un usuario
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const object = req.body;

  if (object.password) object.password = await bcrypt.hash(object.password, 8);

  try {
    let modifyUser = await profile.update(object, {
      where: {
        id: id,
      },
    });
    return res.send({ changed: true });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
