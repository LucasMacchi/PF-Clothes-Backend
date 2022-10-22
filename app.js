const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./Routes/index");
const {logger} = require("./Routes/Utils/logger");
const {errorHandler} = require("./Routes/Utils/errorHandler");
const passport = require('passport');
require('dotenv').config();

const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');

require("./Auth/passport");
require("./Auth/GoogleSSO");

const server = express();

server.name = "API";

server.use(morgan("dev"));

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(cors({ origin: "http://localhost:3000", credentials: true }));

/*server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});*/

server.use(session({
  secret:process.env.SECRET,
  resave: true,
  saveUninitialized:true,
  cookie:{
    sameSite:"none",
    maxAge:1000 * 60 * 60 * 24,
  }
}));

server.get('/',(req,res,next)=>{
  console.log(req.session);
  console.log(req.sessionID);
  res.send('hello world');
});

/*server.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials",true);
  res.header("Access-Control-Allow-Origin",req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

server.use(helmet());*/

server.use(passport.initialize());
server.use(passport.session());


server.use("/", routes);
server.use(logger);

// Error catching endware.
server.use(errorHandler);

module.exports = server;
