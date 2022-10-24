const {product, profile,Op, variant} = require('../../DataBase/db');
const url = require("../Utils/imageUploader")

const addProduct = async (req) => {
    const {id, name, price, materials, brand, demographic, image, variants} = req.body
    
    const profileLink = await profile.findByPk(id)
    if(!await profileLink) throw Error("Profile dont exist")
    console.log("",req.body)
    if(id && name && image === undefined && demographic && variants && price){

        let variantArray= []
        for(let i = 0; i < variants.length; i++){
            const newV = await variant.create(variants[i])
            variantArray.push(newV)
        }
        let arrayImages= []
        for(const file of req.files){
            //console.log(file)
            const cUrl = await url(await file.path)
            arrayImages.push(await cUrl)
          }
        //console.log(arrayImages)
        const newProduct = await product.create({
            name,
            price,
            materials,
            brand,
            demographic,
            image: arrayImages

        })
        await newProduct.addVariants(variantArray)
        await profileLink.addProduct(newProduct)
        return "Producto creado con exito"
        
    }
    else throw Error("Insufficient information")
}

module.exports = addProduct