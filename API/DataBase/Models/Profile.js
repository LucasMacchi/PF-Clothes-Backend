const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("profile", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    storeName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    banner: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    profilePicture:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorites: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    shoppingCart: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  });
};
