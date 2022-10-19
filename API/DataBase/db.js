require('dotenv').config();
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const { Sequelize,Op } = require("sequelize");
const modelProduct = require("./Models/Producto")
const modelCalification = require("./Models/Calification")
const modelMarketedProduct = require("./Models/MarketedProduct")
const modelProfile = require("./Models/Profile")

//Seeders
const users = require("./Seeders/users")
const products = require("./Seeders/products")
const reviews = require("./Seeders/reviews")

const conn = new Sequelize("pf_cloth", DB_USER, DB_PASSWORD, {
    host:DB_HOST,
    dialect:"postgres",
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})

/*
const conn = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pf-cloth`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
*/


modelProduct(conn)
modelCalification(conn)
modelMarketedProduct(conn)
modelProfile(conn)
//console.log(conn.models)
//Asociaciones
const {product, qualification, marketedProduct, profile} = conn.models

//Perfil
profile.hasMany(product)
profile.hasMany(marketedProduct)
profile.hasMany(qualification) 
//producto
product.hasMany(qualification) 
//marketedProduct
marketedProduct.hasOne(product)

///Seeder

const profilesCreator = async() => {


    var e = 0

    for(i = 0; i < users.length; i++){
        const profileC = await profile.create(users[i])

        if(e <= products.length){
            await profileC.createProduct(products[e])
            if(products[e+1]) await profileC.createProduct(products[e+1])
            e += 2
        }
        if(reviews[i]){
            await profileC.createQualification(reviews[i])
        }
        
    }

}


module.exports = {
    conn,
    profilesCreator,
    ...conn.models,
    Op,
    
}
