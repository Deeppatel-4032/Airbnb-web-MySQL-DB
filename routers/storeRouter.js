// core module
const express = require("express");
const storeRouter = express.Router();

// local module
const storeCon = require("../controllers/storeCon");

// get req
storeRouter.get("/index", storeCon.getIndex);
storeRouter.get("/home", storeCon.getHome);
storeRouter.get("/booking-list", storeCon.getBookings);
storeRouter.get("/home-details/:homeId", storeCon.getHoemDetails);

// post req

module.exports = storeRouter;
