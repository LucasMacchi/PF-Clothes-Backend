Guide of routes:

Product Routes:

    -POST /product
        -This will create a new product, it will require a profile id and an array of objects with the variant
        properties (size, stock, color)

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

    -GET /product/filter?name=&price=&size=&demographic=&color=&cant=
        - This route filters the products that match with any of the filters, and the cant variable,is an optional variable that let you specify the amout of product that each subarray will include

    -GET /product/:id
        - This route bring a product info using the id in the url

    -POST /product/review/:id
        - This route add a review with a body with score and reviews as properties, the id will be the product to review

    -GET /product/review/:id
        -This route returns all the reviews from an specific product

    -GET /product/review/avrg/:id
        -This route returns the average score of a profile



Profile Routes:

    - POST /user
        - This route will create a user in the Profile table

    - POST /user/get
        - This route will fetch a user by the id in the token

    - PUT /user/:id
        - This route will modify a user data by the id in the url

    - PUT /user/favorites?productID=&profileID=
        - This route will add a product to the favorites array in the Profile table

    - PUT /user/shoppingcart?productID=&profileID=
        - This route will add a product to the shoppingcart array in the Profile table

    -GET /user/shoppingcart?profileID=
        -This route will return all the products in a profile's shoppingcart

    - DELETE /user/favorites?productID=&profileID=
        - This route will eliminate a product of the favorites array in the Profile table

    - DELETE /user/shoppingcart?productID=&profileID=
        - This route will eliminate a product of the shoppingcart array in the Profile table

    -POST /user/review/:id
        - This route add a review with a body with score and reviews as properties, the id will be the profile to review

    -GET /user/review/:id
        -This route returns all the reviews from an specific user

    -GET /user/review/avrg/:id
        -This route returns the average score of a profile

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

Review:

    -GET /review/:id
        -Get an specific review by id

    -PUT /review/:id
        -This route require a body with "score" and "reviews" as properties, then, it will update the review with the new one and then returned

    -DELETE /review/:id
        - This route will delete a review from the database

login:

    -POST /login
        -Accept username and password to generate token and send to the client

Variant:

    -GET variant/:id
        -This route will return the variant with that id

    -PUT variant/:id
        -This route will modify the variant with that id

    -DELETE variant/:id
        -This route will delete the variant with that id

Activate:

    -PUT activate/user/:id
        -This route will activate the user

    -DELETE activate/user/:id
        -This route will desactivate the user
    
    -PUT activate/product/:id
        -This route will activate the product

    -DELETE activate/product/:id
        -This route will desactivate the product

test users:

    - those are the test users to make use of the login route
    - user : lmacchi / password : 123456
    - user : mrodriguez / password : 8524
    - user : rhernando / password : 8521
    - user : fmilazzo / password : 8521
    - user : mgonzales / password : 8521
    - user : lbuchetti / password : 8521
    - user : mdavis / password : 8521
    - user : mcosseti / password : 8521
    - user : msantos / password : 8521
    - user : plampone / password : 8521
    - user : gmedina / password : 8521
    - user : fanca / password : 8521

protected routes:

    - POST /product
    - POST /product/review/:id
    - POST /user/get
    - PUT /user/:id
    - PUT /user/favorites
    - PUT /user/shoppingcart
    - DELETE /user/favorites
    - DELETE /user/shoppingcart
    - POST /user/review/:id
