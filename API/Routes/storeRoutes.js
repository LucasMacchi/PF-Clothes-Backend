const { Router } = require("express");
const router = Router();
const {
    getAllStores,
    getStoreByName,
} = require('./Controllers/stores');
const {getToken} = require('./Utils/getToken');

// rutas vendedores
router.get("/all",getAllStores);
router.get("/:name",getStoreByName);

module.exports = router;