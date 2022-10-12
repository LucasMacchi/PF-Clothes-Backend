const { Router } = require("express");
//Aca van los archivos con las rutas
const productRoutes = require("../Routes/productRoutes");
const userRoutes = require("../Routes/userRoutes");

//
const router = Router();

//
router.use("/product", productRoutes);
//
router.use("/user", userRoutes);
//Test
router.get("/test", (req, res) => {
  res.send("Hello World!!!!, im working");
});
//

module.exports = router;
