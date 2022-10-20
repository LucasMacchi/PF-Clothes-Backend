const { Router } = require("express");
//Aca van los archivos con las rutas
const productRoutes = require("../Routes/productRoutes");
const userRoutes = require("../Routes/userRoutes");
const storeRoutes = require("../Routes/storeRoutes");
const loginRoutes = require("../Routes/loginRoutes");
const sizesRoutes = require("../Routes/sizesRoutes");
const demographicRoutes = require("../Routes/demographicRoutes");
const reviewRoutes = require("./reviewRoutes")
//
const router = Router();

//
router.use("/product", productRoutes);
//
router.use("/user", userRoutes);
//
router.use("/stores",storeRoutes);
// login
router.use("/login",loginRoutes);
// sizes
router.use("/sizes",sizesRoutes);
// demographics
router.use("/demographics",demographicRoutes);
//review
router.use("/review", reviewRoutes)
//Test
router.get("/test", (req, res,next) => {
  res.send("Hello World!!!!, im working");
  next();
});

module.exports = router;
