const {
  profile,
  Op,
  product,
  qualification,
  marketedProduct,
} = require("../../DataBase/db");

const postMarketedProducts = async (id, productos) => {
  const user = await profile.findByPk(id);

  for (const file of productos) {
    const comprados = await marketedProduct.create({
      id: file.id,
      status: file.name,
      price: file.price,
      amount: file.price,
    });
    await user.addMarketedProduct(comprados);
  }

  return "Review agregada al " + order;
};

module.exports = postMarketedProducts;
