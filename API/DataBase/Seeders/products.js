const products = [
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

    },
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

    },
    {
        size: "S",
        color: "Verde",
        price: 24,
        demographic: "teen female",
        stock: 156,
        image: "https://images.pexels.com/photos/7208718/pexels-photo-7208718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Shorts",

    },
    {
        name: "Campera",
        size: "XXL",
        color: "Gris",
        price: 47,
        demographic: "adult male",
        stock: 47,
        image: "https://images.pexels.com/photos/10447586/pexels-photo-10447586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    },
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

    },
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

    },
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

    },
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

    },
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

    },
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

    },
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

    },
    {
        name: "Camisa",
        size: "XL",
        color: "Blanco",
        price: 45,
        demographic: "adult male",
        stock: 20,
       image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    },
]

module.exports = products