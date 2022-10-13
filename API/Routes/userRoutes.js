const { Router } = require("express");
const { Profile } = require("../DataBase/db");
const router = Router();

//Crear un usuario
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

  try {
    let [user, created] = await Profile.findOrCreate({
      where: {
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
    let user = await Profile.findByPk(id);
    return res.send(user);
  } catch (err) {
    res.send(err.message);
  }
});

//Modificar datos de un usuario
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const object = req.body;
  try {
    let modifyUser = await Profile.update(object, {
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
