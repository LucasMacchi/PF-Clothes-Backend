Guide of routes:

Product Routes:

    - GET /product/all/:cant
        -This will bring all the products, the cant variable will determine
        how many products will include each subarray

    -GET /product/all
        -This will bring all the products

    -GET /?search=&cant=
        -The search variable will be the product you want to search and the cant variable,
        is an optional variable that let you specify the amout of product that each subarray will include

    -POST /product
        - This route will create a product in the Product table

    -GET /product/filter?price=&size=&demographic=&cant=
        - This route filters the products that match with any of the filters, and the cant variable,is an optional variable that let you specify the amout of product that each subarray will include

    -GET /product/:id
        - This route bring a product info using the id in the url

Profile Routes:

    - POST /user
        - This route will create a user in the Profile table

    - GET /user/get/:id
        - This route will fetch a user by the id in the url

    - PUT /user/:id
        - This route will modify a user data by the id in the url

    - PUT /user/favorites?productID=&profileID=
        - This route will add a product to the favorites array in the Profile table

    - PUT /user/shoppingcart?productID=&profileID=
        - This route will add a product to the shoppingcart array in the Profile table

    - DELETE /user/favorites?productID=&profileID=
        - This route will eliminate a product of the favorites array in the Profile table

    - DELETE /user/shoppingcart?productID=&profileID=
        - This route will eliminate a product of the shoppingcart array in the Profile table

Stores Routes:

    - GET /stores/all
        - This route will fetch all the stores available in the app

    - GET /stores/:name
        - This route will fetch a store by the name in the url

Sizes Routes:

    - GET /sizes
        - This route will fetch all the sizes for the cloth of the e-commerce

Demographics Routes:

    - GET /demographics
        - This route will fetch all the demographics for the cloth of the e-commerce