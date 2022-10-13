require('dotenv').config();
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const { Sequelize,Op } = require("sequelize");
const modelProduct = require("./Models/Producto")
const modelCalification = require("./Models/Calification")
const modelMarketedProduct = require("./Models/MarketedProduct")
const modelProfile = require("./Models/Profile")

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
console.log(conn.models)
//Asociaciones
const {product, qualification, marketedProduct, profile} = conn.models

//Perfil
profile.hasMany(product)
profile.hasMany(marketedProduct)
//calification
qualification.hasOne(profile)
qualification.hasOne(product)
//marketedProduct
marketedProduct.hasOne(product)


///Seeder

const profilesCreator = async() => {

    await profile.create({
        name: "Lucas Macchi",
        mail: "lucasmacchi25@gmail.com",
        password: "123456",
        phone: "111111111111",
        storeName: "Altas zapatillas",
        banner: "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?cs=srgb&dl=pexels-william-matt-3768005.jpg&fm=jpg",
        location: "Corrientes",
        profilePicture: "https://t1.pb.ltmcdn.com/es/posts/2/4/2/que_piensa_una_persona_cuando_dejas_de_buscarla_5242_orig.jpg"
    })
    await profile.create({
        name: "Marcelo Rodriguez",
        mail: "marcelito@hotmail.com",
        password: "8524",
        phone: "111111111111",
        storeName: "Buzos baratos",
        banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
        location: "Corrientes",
        profilePicture: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
    })
}

const createProducts = async() => {
    await product.create({
        name: "jeans",
        size: "XL",
        color: "rojo",
        price: 25,
        demographic: "adult male",
        stock: 10,
        image: "no image"
    })
    await product.create({
        name: "remera",
        size: "XL",
        color: "rojo",
        price: 25,
        demographic: "adult male",
        stock: 10,
        image: "no image"
    })
    await product.create({
        name: "zapatos",
        size: "XL",
        color: "rojo",
        price: 25,
        demographic: "adult male",
        stock: 10,
        image: "no image"
    })
    await product.create({
        name: "shorts",
        size: "XL",
        color: "rojo",
        price: 25,
        demographic: "adult male",
        stock: 10,
        image: "no image"
    })
}

module.exports = {
    conn,
    profilesCreator,
    ...conn.models,
    Op,
    createProducts,
}
