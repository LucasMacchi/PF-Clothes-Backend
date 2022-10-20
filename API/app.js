const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
//const cookieParser = require('cookie-parser');
const routes = require("./Routes/index");
const {logger} = require("./Routes/Utils/logger");
const {errorHandler} = require("./Routes/Utils/errorHandler");
const passport = require('passport');
const helmet = require('helmet');
require('express-session');
require("./Auth/passport");
require("./Auth/GoogleSSO");

const server = express();

server.name = "API";

server.use(morgan("dev"));

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
//server.use(cookieParser());
server.use(helmet());
server.use(passport.initialize());
server.use(passport.session());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


server.use(logger);
server.use("/", routes);

// Error catching endware.
server.use(errorHandler);

module.exports = server;
