const {profile,Op} = require('../../DataBase/db');


const addProductsToLists = async(productID, userID, order) => {
    if(order === "fav"){
        try {
            await profile.update({favorites: favorites.concat(productID)}, {where:{id:userID}})
            return "El producto se agrego a favoritos"
        } catch (error) {
            throw Error(error)
        }
    }
    else if(order === "shop"){
        try {
            await profile.update({shoppingCart: shoppingCart.concat(productID)}, {where:{id:userID}})
            return "El producto se agrego al carrito"
        } catch (error) {
            throw Error(error)
        }
    }
    else throw Error("Orden incorrecta")
    
}

module.exports = addProductsToLists