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
//console.log(conn.models)
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

    await qualification.create({
        score: 3,
        reviews: "Un capo",
        }).then(async (qual) => {
            const user = await profile.create({
                name: "Lucas Macchi",
                username:"lmacchi",
                mail: "lucasmacchi25@gmail.com",
                password: "$2a$08$j8/eAoOFOyPatGDWm6P/b.kYgAKXC8UaXAqK0G84myeHXm4Pm13Ti",// password:"123456"
                phone: "111111111111",
                storeName: "Altas zapatillas",
                banner: "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?cs=srgb&dl=pexels-william-matt-3768005.jpg&fm=jpg",
                location: "Corrientes",
                profilePicture: "https://t1.pb.ltmcdn.com/es/posts/2/4/2/que_piensa_una_persona_cuando_dejas_de_buscarla_5242_orig.jpg",
                products:[
                    {
                        size: "L",
                        color: "Gris",
                        price: 10,
                        demographic: "teen male",
                        stock: 156,
                        image: "https://images.pexels.com/photos/954254/pexels-photo-954254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name: "Gorra",
                    },
                    {
                        name: "remera",
                        size: "M",
                        color: "Negro",
                        price: 48,
                        demographic: "teen female",
                        stock: 47,
                        image: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }
                ]
            }, {
                include: [product]
            })
            qual.setProfile(user)
        })

    await qualification.create({
        score: 4,
        reviews: "Muy buenos productos, confiable",
        }).then(async (qual) => {
            const user = await profile.create({
                name: "Marcelo Rodriguez",
                username:"mrodriguez",
                mail: "marcelito@hotmail.com",
                password: "$2a$08$qucaVmg1AfwdUSKMVt/s9eMY7/Oi.LJnU6VUaZQe.YSKyZDmA3zW.",//password:"8524"
                phone: "111111111111",
                        storeName: "Buzos baratos",
                banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
                location: "Corrientes",
                profilePicture: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
                products:[
                    {
                        size: "XL",
                        color: "Gris",
                        price: 75,
                        demographic: "teen female",
                        stock: 156,
                        image: "https://images.pexels.com/photos/1838903/pexels-photo-1838903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name: "Pantalon",
                    },
                    {
                        name: "Chaleco",
                        size: "S",
                        color: "Negro",
                        price: 47,
                        demographic: "adult female",
                        stock: 47,
                        image: "https://images.pexels.com/photos/9178793/pexels-photo-9178793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }
                ]
            }, {
                include: [product]
             })
            qual.setProfile(user)
        })

    await qualification.create({
        score: 1,
        reviews: "ESTAFADOOOOR!!!!",
        }).then(async (qual) => {
            const user = await profile.create({
                name: "Roberto Hernando",
                username:"rhernando",
                mail: "golo@hotmail.com",
                password: "$2a$08$GIOAnXCnDhsjTaITR05u/e.IuHL99GEnPTy1lqpLkkgz.bhtjZjFm",// password:"8521"
                phone: "111111111111",
                banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
                location: "torrejas",
                profilePicture: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"     ,
                products:[
                    {
                        size: "S",
                        color: "Verde",
                        price: 24,
                        demographic: "teen female",
                        stock: 156,
                        image: "no image",
                        name: "https://images.pexels.com/photos/7208718/pexels-photo-7208718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    },
                    {
                        name: "Campera",
                        size: "XXL",
                        color: "Gris",
                        price: 47,
                        demographic: "adult male",
                        stock: 47,
                        image: "https://images.pexels.com/photos/10447586/pexels-photo-10447586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }
                ]
            }, {
                include: [product]
            })
            qual.setProfile(user)
        })

    await qualification.create({
        score: 1,
        reviews: "Me amenazo!!",
        }).then(async (qual) => {
            const user = await profile.create({
                name: "Franco Milazzo",
                username:"fmilazzo",
                mail: "francoMil@gmail.com",
                password: "$2a$08$w3lWaaat2TyQSgbvoAuBye4zR.rnn78y2FlO1tnRnZgo4fOqLbczm", // password : "8521"
                phone: "111111111111",
                banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
                location: "Cordoba",
                profilePicture: "https://static.wikia.nocookie.net/lossimuladores/images/3/3f/Franco_Milazzo.png/revision/latest/scale-to-width-down/250?cb=20150623183355&path-prefix=es",
                products:[
                    {
                        size: "M",
                        color: "Azul",
                        price: 68,
                        demographic: "teen female",
                        stock: 78,
                        image: "https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name: "Jean",
                    },
                    {
                        name: "Buzo",
                        size: "XXS",
                        color: "Amarillo",
                        price: 47,
                        demographic: "little boy",
                        stock: 20,
                        image: "https://images.pexels.com/photos/1731857/pexels-photo-1731857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }
                ]
            }, {
                include: [product]
            })
            qual.setProfile(user)
        })
        
    await qualification.create({
        score: 4,
        reviews: "Buena tienda",
        }).then(async (qual) => {
            const user = await profile.create({
                name: "Martina Gonzales",
                username:"mgonzales",
                mail: "martina_43@gmail.com",
                password: "$2a$08$.9NTiO04sBHHvUcS0nirYuJJqWnB2W9YnNn5s2rqYOXg9F2tB05Y.",// password:"8521"
                phone: "111111111111",
                banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
                location: "Cordoba",
                profilePicture: "https://lamenteesmaravillosa.com/wp-content/uploads/2022/03/mujer-ojos-cerrados-mano-corazon-768x512.jpg",
                products:[
                    {
                        size: "M",
                        color: "Azul",
                        price: 68,
                        demographic: "teen male",
                        stock: 78,
                        image: "https://images.pexels.com/photos/6421668/pexels-photo-6421668.jpeg?auto=compress&cs=tinysrgb&w=400",
                        name: "Jean",
                    },
                    {
                        name: "Buzo",
                        size: "XXS",
                        color: "Blanco",
                        price: 47,
                        demographic: "teen female",
                        stock: 20,
                        image: "https://images.pexels.com/photos/7036552/pexels-photo-7036552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }
                ]
            }, {
                include: [product]
            })
            qual.setProfile(user)
        })

    await qualification.create({
        score: 5,
        reviews: "De las mejores tiendas, buen servicio",
        }).then(async (qual) => {
            const user = await profile.create({
                name: "Lucia Buchetti",
                username:"lbuchetti",
                mail: "luci_arg@gmail.com",
                password: "$2a$08$Ozd0Md/aTtl4zVBs/V/8yu0wRtBYcVu2Se6jVSGAgeoACWEfZJ0Ke", // password : 8521
                phone: "111111111111",
                banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
                location: "Mendoza",
                profilePicture: "https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg",
                products:[
                    {
                        size: "M",
                        color: "Amarillo",
                        price: 78,
                        demographic: "adult female",
                        stock: 78,
                        image: "https://images.pexels.com/photos/2755165/pexels-photo-2755165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name: "Campera",
                    },
                    {
                        name: "Saco",
                        size: "L",
                        color: "Cafe",
                        price: 98,
                        demographic: "adult male",
                        stock: 20,
                        image: "https://images.pexels.com/photos/2245432/pexels-photo-2245432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }
                ]
            }, {
                include: [product]
            })
            qual.setProfile(user)
        })

    await qualification.create({
        score: 3,
        reviews: "No tan bueno, falta soporte",
        }).then(async (qual) => {
            const user = await profile.create({
                name: "Mario Davis",
                username:"mdavis",
                mail: "mario_el10@gmail.com",
                password: "$2a$08$buAjncij/WavoYrnV5.kbekHYlEm9iIsal9m4G7ZogMTig3kdRQfu",// password:"8521"
                phone: "111111111111",
                banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
                location: "Entre Rios",
                profilePicture: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/06/billy-kametz-2728819.jpg?itok=dLNsBLtJ",
                products:[
                    {
                        size: "XXL",
                        color: "Azul",
                        price: 25,
                        demographic: "adult male",
                        stock: 78,
                        image: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name: "Remera",
                    },
                    {
                        name: "Boxers",
                        size: "L",
                        color: "Negro",
                        price: 98,
                        demographic: "teen male",
                        stock: 20,
                        image: "https://images.pexels.com/photos/2628207/pexels-photo-2628207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }
                ]
            }, {
                include: [product]
            })
            qual.setProfile(user)
        })

    await qualification.create({
        score: 5,
        reviews: "Un Disculpe, fuego tiene?",
        }).then(async (qual) => {
            const user = await profile.create({
                name: "Maximo Cosseti",
                username:"mcosseti",
                mail: "maximo_coset@gmail.com",
                password: "$2a$08$L1ybjTFoKfG3eOF9v2b3.Oyn8bHMs8Ob97YW3ox3Ct84ODxJXBDpu",//password:"8521"
                phone: "111111111111",
                banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
                location: "CABA",
                profilePicture: "https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/Y2B2DJZVBFAFRB4NDORUCUXDUM.jpg",
                products:[
                    {
                        size: "M",
                        color: "Gris",
                        price: 78,
                        demographic: "adult male",
                        stock: 78,
                        image: "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name: "Saco",
                    },
                    {
                        name: "Camisa",
                        size: "L",
                        color: "Rojo",
                        price: 98,
                        demographic: "adult male",
                        stock: 20,
                        image: "https://images.pexels.com/photos/10465941/pexels-photo-10465941.jpeg?auto=compress&cs=tinysrgb&w=400",
                    }
                ]
            }, {
                include: [product]
            })
            qual.setProfile(user)
       })

    await qualification.create({
        score: 5,
        reviews: "Un capo",
     }).then(async (qual) => {
         const user = await profile.create({
             name: "Mario Santos",
             username:"msantos",
             mail: "marioSantito@gmail.com",
             password: "$2a$08$yq1jgaokXrPLdgWR.jWlHuFOM4DRsGMyw2ncntUqU3RwHn95KgeOq", // password:"8521"
             phone: "111111111111",
             banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
             location: "CABA",
             profilePicture: "https://static.wikia.nocookie.net/lossimuladores/images/3/3d/Mario_Santos.png/revision/latest/scale-to-width-down/250?cb=20150614023808&path-prefix=es",
             products:[
                 {
                     size: "M",
                     color: "Verde",
                     price: 78,
                     demographic: "adult male",
                     stock: 78,
                     image: "https://images.pexels.com/photos/11280416/pexels-photo-11280416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                     name: "Campera alcolchada",
                 },
                 {
                     name: "Camisa",
                     size: "M",
                     color: "Azul",
                     price: 98,
                     demographic: "adult male",
                     stock: 20,
                     image: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=400",
                 }
             ]
         }, {
             include: [product]
         })
         qual.setProfile(user)
    })

    await qualification.create({
        score: 5,
        reviews: "Me envio todo el mismo dia, un capoo!!",
        }).then(async (qual) => {
            const user = await profile.create({
                name: "Pablo Lamponne",
                username:"plampone",
                mail: "LamponeATiempo@gmail.com",
                password: "$2a$08$BX8OhJDnizlV/RX4gDHDfef4Od4TzgI4SijgYEuIWcW4.JcfFPQLK",//password:"8521"
                phone: "111111111111",
                banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
                location: "CABA",
                profilePicture: "https://static.wikia.nocookie.net/lossimuladores/images/b/b8/54216_fiobe-pobtada.jpg/revision/latest/scale-to-width-down/250?cb=20170709032448&path-prefix=es",
                products:[
                    {
                        size: "M",
                        color: "Cafe",
                        price: 78,
                        demographic: "adult male",
                        stock: 78,
                        image: "https://images.pexels.com/photos/11506761/pexels-photo-11506761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name: "Chaqueta",
                    },
                    {
                        name: "Camisa",
                        size: "L",
                        color: "Blanco",
                        price: 98,
                        demographic: "adult female",
                        stock: 20,
                       image: "https://images.pexels.com/photos/9725690/pexels-photo-9725690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }
                ]
            }, {
                include: [product]
            })
            qual.setProfile(user)
       })

    await qualification.create({
        score: 5,
        reviews: "Me envio todo el mismo dia, un capoo!!",
    }).then(async (qual) => {
        const user = await profile.create({
            name: "Gabriel David Medina",
            username:"gmedina",
            mail: "GabrielMedi@gmail.com",
            password: "$2a$08$f/3k5KtoxTT4.Cz712tRf.s6i.8Ycn.tg5lTZEfT/GB.mHiWvJAZO",// password:"8521"
            phone: "111111111111",
            banner: "https://st2.depositphotos.com/1006832/6017/i/950/depositphotos_60178113-stock-photo-clothes-shop-interior.jpg",
            location: "CABA",
            profilePicture: "https://static.wikia.nocookie.net/lossimuladores/images/c/ce/Tarjeta_de_Navidad_26.png/revision/latest/scale-to-width-down/180?cb=20160318014107&path-prefix=es",
            products:[
                {
                    name: "Camisa",
                    size: "XL",
                    color: "Blanco",
                    price: 45,
                    demographic: "adult male",
                    stock: 20,
                   image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }
            ]
        }, {
            include: [product]
        })
        qual.setProfile(user)
        })
}


module.exports = {
    conn,
    profilesCreator,
    ...conn.models,
    Op,
    
}
