const {profile,Op} = require('../../DataBase/db');


const addProductsToLists = async(prodID, proid, order) => {
    if(order === "fav"){
        try {
            await profile.update({favorites: favorites.concat(prodID)}, {where:{id:proid}})
            return "El producto se agrego a favoritos"
        } catch (error) {
            throw Error(error)
        }
    }
    else if(order === "shop"){
        try {
            await profile.update({shoppingCart: shoppingCart.concat(prodID)}, {where:{id:proid}})
            return "El producto se agrego al carrito"
        } catch (error) {
            throw Error(error)
        }
    }
    else throw Error("Orden incorrecta")
    
}

module.exports = addProductsToLists