const { product, Op } = require("../../DataBase/db");
const paginated = require("./paginado");

const getFilteredProducts = async (size, price, demographic, cant) => {
  if (size && price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        price,
        demographic,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && price) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        price,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        demographic,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        price,
        demographic,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size) {
    let filteredProducts = await product.findAll({
      where: {
        size: size,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (demographic) {
    let filteredProducts = await product.findAll({
      where: {
        demographic: demographic,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (price) {
    let filteredProducts = await product.findAll({
      where: {
        price: price,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else {
    let filteredProducts = await product.findAll();
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  }
};

module.exports = getFilteredProducts;
