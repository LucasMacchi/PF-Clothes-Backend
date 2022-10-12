const { DataTypes } = require("sequelize");
const { product_id_generator } = require("../utils/productID_Generator");
const { sizes } = require("../utils/sizes.js");
const { demographic } = require("../utils/demographic");

module.exports = (sequelize) => {
  sequelize.define("product", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: "",
      set(value) {
        this.setDataValue("id", product_id_generator());
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validator: {
        isIn: [sizes],
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    temporal_price: {
      type: DataTypes.NUMBER,
    },
    materials: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    demographic: {
      type: DataTypes.STRING,
      allowNull: false,
      validator: {
        isIn: [demographic],
      },
    },
    stock: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
