const { Router } = require("express");
const router = Router();
//Controllers
const getVariant = require("./Controllers/getVariant")

router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
      const response = await getVariant(id)
      res.status(200).send(response);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

module.exports = router;