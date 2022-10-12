const { DataTypes } = require("sequelize");
const { sizes } = require("../utils/sizes.js");
const { demographic } = require("../utils/demographic");

module.exports = (sequelize) => {
  sequelize.define("product", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
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
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    temporal_price: {
      type: DataTypes.FLOAT,
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
