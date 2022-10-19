const { product, Op } = require("../../DataBase/db");
//const paginated = require("./paginado");

const getFilteredProducts = async (
  name,
  size,
  price,
  demographic,
  color,
  page,
  sortBy,
  orderBy
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
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));

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
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (size && price && demographic && color) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        demographic,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (size && price && color && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
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
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (color && price && demographic && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));

    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
  } else if (size && price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (size && price && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (size && price && color) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (size && demographic && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (size && demographic && color) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        demographic,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (size && name && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);

    //////////////////////////////////////////////
  } else if (color && price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        color,
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (color && price && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (color && demographic && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        color,
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);

    /////////////////////////////////////////
  } else if (demographic && price && name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (demographic && price && color) {
    let filteredProducts = await product.findAll({
      where: {
        demographic,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (demographic && name && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);

    /////////////////////////////////////////
  } else if (name && price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (name && price && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (name && demographic && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);

    ////////////////////////////////////////
  } else if (price && demographic && color) {
    let filteredProducts = await product.findAll({
      where: {
        demographic,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));

    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
  } else if (name && price) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (name && size) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        size,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (name && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (name && color) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (size && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (size && color) {
    let filteredProducts = await product.findAll({
      where: {
        size,
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (size && price) {
    let filteredProducts = await product.findAll({
      where: {
        size,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (price && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (price && color) {
    let filteredProducts = await product.findAll({
      where: {
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (color && demographic) {
    let filteredProducts = await product.findAll({
      where: {
        color,
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);

    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
  } else if (size) {
    let filteredProducts = await product.findAll({
      where: {
        size,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (demographic) {
    let filteredProducts = await product.findAll({
      where: {
        demographic,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (price) {
    let filteredProducts = await product.findAll({ limit: 10, offset: page });
    return (data = await filteredProducts.filter((el) => el.price <= price));
  } else if (name) {
    let filteredProducts = await product.findAll({
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  } else if (color) {
    let filteredProducts = await product.findAll({
      where: {
        color,
      },
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);

    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
  } else {
    let filteredProducts = await product.findAll({
      limit: 10,
      offset: page,
      order: [[sortBy, orderBy]],
    });
    return (data = await filteredProducts);
  }
};

module.exports = getFilteredProducts;
