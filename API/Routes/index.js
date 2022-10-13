const { Router } = require("express");
//Aca van los archivos con las rutas
const productRoutes = require("../Routes/productRoutes");
const userRoutes = require("../Routes/userRoutes");
const storeRoutes = require("../Routes/storeRoutes");

//
const router = Router();

//
router.use("/product", productRoutes);
//
router.use("/user", userRoutes);
//
router.use("/stores",storeRoutes);
//Test
router.get("/test", (req, res) => {
  res.send("Hello World!!!!, im working");
});
//

module.exports = router;
