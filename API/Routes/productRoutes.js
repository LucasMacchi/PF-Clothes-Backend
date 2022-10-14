const { Router } = require("express");
const { product, profile } = require("../DataBase/db");

//Aca van los archivos de los controladores
const getAllProducts = require("./Controllers/getAllProducts");
const getProductName = require("./Controllers/getAllProductsByName");
//
const router = Router();

//Aca abajo van las rutas separadas
//Trae todos los productos con una cantidad especificada por arreglo
router.get("/all/:cant", async (req, res) => {
  const cant = req.params.cant;
  try {
    const allproducts = await getAllProducts(cant);
    res.status(200).send(allproducts);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
//Trae todos los productos
router.get("/all", async (req, res) => {
  try {
    const allproducts = await getAllProducts(0);
    res.status(200).send(allproducts);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
//
//Traer todos los productos por nombre / Trae por query la variable search (string de busqueda) y cant (cantidad de elementos en paginado)
router.get("/", async (req, res) => {
  const search = req.query.search;
  const cant = req.query.cant;
  try {
    if (cant) {
      const productsByName = await getProductName(search, cant);
      res.status(200).send(productsByName);
    } else {
      const productsByName = await getProductName(search, 0);
      res.status(200).send(productsByName);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});
//
//Agregar un producto
router.post("/", async (req, res) => {
  let {
    id,
    name,
    size,
    color,
    price,
    temporal_price,
    materials,
    brand,
    demographic,
    stock,
    image,
  } = req.body;

  try {
    let [postProduct, created] = await product.findOrCreate({
      where: {
        name,
        size,
        color,
        price,
        temporal_price,
        materials,
        brand,
        demographic,
        stock,
        image,
      },
    });
    let user = await profile.findByPk(id);
    await postProduct.addProfiles(user);

    res.status(200).send(postProduct);
  } catch (error) {
    res.status(404).send(error);
  }
});

//exportamos el router
module.exports = router;
