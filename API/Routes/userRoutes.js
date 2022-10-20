const { Router } = require("express");
var bcrypt = require("bcryptjs");
const { profile } = require("../DataBase/db");
const router = Router();
//Controladores
const addProductsToLists = require("./Controllers/addProductsToLists")
const deleteProductsOfList = require("./Controllers/deleteProductsOfList")
const addReview = require("./Controllers/addReview");
const getReview = require("./Controllers/getReviews");
const getAvrg = require("./Controllers/avrgScore");
const {getToken} = require("./Utils/getToken");

// crear usuario
router.post("/", async (req, res) => {
  let {
    name,
    mail,
    username,
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
        username,
        storeName,
        banner,
        profilePicture,
        location,
        favorites,
        shoppingCart,
      },
    });
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});
//add elements to favorites
router.put("/favorites",getToken, async (req, res) => {
  const {productID, profileID} = req.query
  try {
      const response = await addProductsToLists(productID, profileID, "fav")
      res.status(200).send(response)
  } catch (error) {
      res.status(404).send(error.message)
  }
})

//add elements to shoppingcart
router.put("/shoppingcart",getToken, async (req, res) => {
  const {productID, profileID} = req.query
  try {
      const response = await addProductsToLists(productID, profileID, "shop")
      res.status(200).send(response)
  } catch (error) {
      res.status(404).send(error.message)
  }
})
//remove elements of favorites
router.delete("/favorites",getToken, async (req, res) => {
  const {productID, profileID} = req.query
  try {
      const response = await deleteProductsOfList(productID, profileID, "fav")
      res.status(200).send(response)
  } catch (error) {
      res.status(404).send(error.message)
  }
})
//remove elements of the shopping card
router.delete("/shoppingcart",getToken, async (req, res) => {
  const {productID, profileID} = req.query
  try {
      const response = await deleteProductsOfList(productID, profileID, "shop")
      res.status(200).send(response)
  } catch (error) {
      res.status(404).send(error.message)
  }
})

//Request data from user
router.post("/get",getToken, async (req, res) => {
  const { id } = req;
  try {
    let user = await profile.findByPk(id);
    return res.send(user);
  } catch (err) {
    res.send(err.message);
  }
});

//Trae las reviews al usuario
router.get("/review/:id", async (req, res) => {
  const id = req.params.id
  try {
    const response = await getReview(id, "profile");
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
})
//Trae el promedio de puntaje del usuario
router.get("/review/avrg/:id", async (req, res) => {
  const id = req.params.id
  try {
    const response = await getAvrg(id, "profile");
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
})
//Traer reviews de un usuario
router.post("/review/:id",getToken, async (req, res) => {
  const id = req.params.id
  try {
    const response = await addReview(id, req.body, "profile");
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error.message);
  }
})

//Modificar datos de un usuario
router.put("/:id",getToken, async (req, res) => {
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
