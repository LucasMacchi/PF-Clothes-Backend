const { Router } = require("express");
const router = Router();
const {
    getAllStores,
    getStoreByName,
} = require('./Controllers/stores');

// rutas vendedores
router.get("/all",getAllStores);
router.get("/",getStoreByName);

module.exports = router;