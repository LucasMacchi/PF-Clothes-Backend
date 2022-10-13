const {product} = require("../../DataBase/db")

const getAllProducts = async (cant) => {

    const allproducts = await product.findAll({raw: true})
    let data = await allproducts
    console.log(data.length)
    if(!data.length) throw Error("No existe ningun producto")
    
    if(cant){
        let finalArray = []
        while(data.length){
            finalArray.push(data.splice(0, cant))
        }
        return finalArray
    }
    else return data
    

}

module.exports = getAllProducts