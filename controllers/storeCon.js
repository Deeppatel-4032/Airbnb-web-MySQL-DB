const home = require("../models/homeModel");

exports.getIndex = (req, res) => {
  home.fetchhAll().then(([registerHome]) => {
    console.log("home Data", registerHome);
    res.render("store/index", {
      homes: registerHome,
      pageTitle: "airbnb Home.com",
      currantPage: "index",
    });
  });
};

exports.getHome = (req, res) => {
  home.fetchhAll().then(([registerHome]) => {
    res.render("store/home-list", {
      homes: registerHome,
      pageTitle: "airbnb Home.com",
      currantPage: "home",
    });
  });
};

exports.getBookings = (req, res) => {
  res.render("store/booking-list", {
    pageTitle: "My Booking List Details",
    currantPage: "booking-list",
  });
};

exports.getHoemDetails = (req, res) => {
  const homeId = req.params.homeId;
  console.log("_id", homeId);

  home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    if (!home) {
      res.redirect("/home");
    } else {
      console.log("home details found", home);
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Details",
        currantPage: "home",
      });
    }
  });
};
