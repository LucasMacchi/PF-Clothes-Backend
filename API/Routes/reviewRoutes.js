const { Router } = require("express");
const router = Router();
const getReviewById = require("./Controllers/getReviewById")

//Trae review por id
router.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
      const response = await getReviewById(id);
      res.status(200).send(response);
    } catch (error) {
      res.status(404).send(error.message);
    }
  })


module.exports = router