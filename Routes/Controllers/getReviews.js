const { qualification } = require("../../DataBase/db");

const getReview = async (id, order) => {
  if (order === "product") {
    const review = await qualification.findAll({ where: { productId: id } });
    const data = await review;
    return data;
  } else if (order === "profile") {
    const review = await qualification.findAll({ where: { profileId: id } });
    const data = await review;
    return data;
  } else throw Error("Orden incorrecta");
};

module.exports = getReview;
