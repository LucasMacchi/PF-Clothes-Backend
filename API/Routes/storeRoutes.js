const { Router } = require("express");
const router = Router();
const {
    getAllStores,
} = require('./Controllers/getAllStores');

// rutas vendedores
router.get("/all",getAllStores);

module.exports = router;