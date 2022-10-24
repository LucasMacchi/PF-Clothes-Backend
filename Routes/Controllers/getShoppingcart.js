const {profile,Op, product} = require('../../DataBase/db');

const getShoppingcart = async (id) => {

    const user = await profile.findByPk(id, {raw:true})
    const data =  await user
    if(!data) throw Error("El perfil no existe")
    let productsArray = []
    const shopping = await data.shoppingCart
    //console.log("Todos los ids = ",shopping," LENGTH = "+shopping.length)
    for(const idp of shopping){
        const prod = await product.findByPk(idp, {raw:true})
        const resolved = await prod
        productsArray.push(await resolved)
    }
    //console.log("PRODUCTOS FINALES => ",productsArray)
    return productsArray
}

module.exports = getShoppingcart