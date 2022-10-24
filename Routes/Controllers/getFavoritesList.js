const { profile, product } = require("../../DataBase/db");

const getFavoritesList = async (id) => {
  const user = await profile.findByPk(id, { raw: true });
  const data = await user;
  if (!data) throw Error("El perfil no existe");
  const products = product.findAll(
    { where: { id: data.favorites } },
    { raw: true }
  );
  return await products;
};

module.exports = getFavoritesList;
