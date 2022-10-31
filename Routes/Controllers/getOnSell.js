const {product, profile} = require('../../DataBase/db');

const onSell = async (id) => {
    const onSellProducts = await product.findAll({raw:true},{where:{profileId:id}})
    return await onSellProducts
}

module.exports = onSell