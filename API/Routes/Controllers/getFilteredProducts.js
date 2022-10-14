const { product } = require("../../DataBase/db");
const paginated = require("./paginado");

const getFilteredProducts = async (
  size,
  price,
  demographic,
  cant,
  sortBy,
  orderBy
) => {
  if (size && price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        price,
        demographic,
      },
      order: [[sortBy, orderBy]],
    });
    let data = await filteredProducts;
    if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && price) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        price,
      },
      order: [[sortBy, orderBy]],
    });
    let data = await filteredProducts;
    if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        demographic,
      },
      order: [[sortBy, orderBy]],
    });
    let data = await filteredProducts;
    if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        price,
        demographic,
      },
      order: [[sortBy, orderBy]],
    });
    let data = await filteredProducts;
    if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size || price || demographic) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        price,
        demographic,
      },
      order: [[sortBy, orderBy]],
    });
    let data = await filteredProducts;
    if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  }
};

module.exports = getFilteredProducts;
