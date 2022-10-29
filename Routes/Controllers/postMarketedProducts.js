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
      status: "Compra aprobada",
      price: file.price,
      amount: 1,
      name: file.name,
      size: file.size,
      color: file.color,
      demographic: file.demographic,
      productoId: file.id,
    });
    await user.addMarketedProduct(comprados);
  }

  return "Review agregada al " + order;
};

module.exports = postMarketedProducts;
