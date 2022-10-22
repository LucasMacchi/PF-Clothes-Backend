const { Router } = require("express");
const { product, profile } = require("../DataBase/db");

//Aca van los archivos de los controladores
const getAllMarketedProducts = require("./Controllers/getAllMarketedProducts");
const getMarketedProductDetail = require("./Controllers/getMarketedProductDetail");
//
const router = Router();

//Aca abajo van las rutas separadas
//Trae todos los productos vendidos
router.get("/all/:id", async (req, res) => {
  try {
    const allMarketedProducts = await getAllMarketedProducts(id);
    res.status(200).send(allMarketedProducts);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//Trae el detalle de un producto vendido
router.get("/:id", async (req, res) => {
  try {
    const marketedProductDetail = await getMarketedProductDetail(id);
    res.status(200).send(marketedProductDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//exportamos el router
module.exports = router;
