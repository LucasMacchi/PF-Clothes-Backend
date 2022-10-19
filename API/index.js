const server = require("./app");
const {conn, profilesCreator} = require("./DataBase/db")
const PORT = 3001;

const db = conn


db.sync({force: true}).then(()=> {
  server.listen(PORT, async() => {
    try {
      await profilesCreator()
      db.authenticate().then(()=> console.log("database connected"))
      console.log("Server is up, at port ", PORT);
    } catch (error) {
      console.log("Ocurrio un error durante el inicio del servidor: "+error.message)
    }
  });
})


