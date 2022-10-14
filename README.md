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


Profile Routes:

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