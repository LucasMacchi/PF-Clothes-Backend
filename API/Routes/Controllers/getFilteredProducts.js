const { product, Op } = require("../../DataBase/db");
const paginated = require("./paginado");

const getFilteredProducts = async (
  name,
  size,
  price,
  demographic,
  color,
  cant
) => {
  if (size && price && demographic && name && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
        demographic,
        color,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
  } else if (size && price && demographic && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
        demographic,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && price && demographic && color) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        demographic,
        color,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && price && color && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
        color,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && color && demographic && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
        demographic,
        color,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (color && price && demographic && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
        color,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
  } else if (size && price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        demographic,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && price && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && price && color) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        color,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && demographic && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
        demographic,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && demographic && color) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        demographic,
        color,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (size && name && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
        color,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
    //////////////////////////////////////////////
  } else if (color && price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        color,
        demographic,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (color && price && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        color,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (color && demographic && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        color,
        demographic,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
    /////////////////////////////////////////
  } else if (demographic && price && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (demographic && price && color) {
    let filteredProducts = await product.findAll({
      where: {
        demographic,
        color,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (demographic && name && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
        color,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
    /////////////////////////////////////////
  } else if (name && price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (name && price && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        color,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (name && demographic && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
        color,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;

    ////////////////////////////////////////
  } else if (price && demographic && color) {
    let filteredProducts = await product.findAll({
      where: {
        demographic,
        color,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;

    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
  } else if (name && price) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (name && size) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (name && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (name && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        color,
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
  } else if (size && color) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        color,
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
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        demographic,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (price && color) {
    let filteredProducts = await product.findAll({
      where: {
        color,
      },
    });
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (color && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        color,
        demographic,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
  } else if (size) {
    let filteredProducts = await product.findAll({
      where: {
        size,
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
        demographic,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (price) {
    let filteredProducts = await product.findAll();
    let data = await filteredProducts.filter((el) => el.price <= price);
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
  } else if (color) {
    let filteredProducts = await product.findAll({
      where: {
        color,
      },
    });
    let data = await filteredProducts;
    //if (!data.length) throw Error("No existe ningun producto");
    if (cant) {
      return paginated(data, cant);
    } else return data;
    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
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
