const { Router } = require("express");

//Aca van los archivos de los controladores
const getAllProducts = require("./Controllers/getAllProducts")

//
const router = Router();

//Aca abajo van las rutas separadas
//Trae todos los productos con una cantidad especificada por arreglo
router.get("/all/:cant", async (req, res) => {
    const cant = req.params.cant
    try {
        const allproducts = await getAllProducts(cant)
        res.status(200).send(allproducts)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
//Trae todos los productos
router.get("/all", async (req, res) => {
    try {
        const allproducts = await getAllProducts(0)
        res.status(200).send(allproducts)
    } catch (error) {
        res.status(404).send(error.message)
    }
})
//
//exportamos el router
module.exports = router;
