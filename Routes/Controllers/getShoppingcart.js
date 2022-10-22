const {profile,Op, product} = require('../../DataBase/db');

const getShoppingcart = async (id) => {

    const user = await profile.findByPk(id, {raw:true})
    const data =  await user
    if(!data) throw Error("El perfil no existe")
    const products = product.findAll({where:{id:data.shoppingCart}},{raw:true})
    return await products
}

module.exports = getShoppingcart