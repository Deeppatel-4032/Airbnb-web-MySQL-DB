const home = require("../models/homeModel");

exports.getAddHome = (req, res) => {
  res.render("admin/edit-home", {
    pageTitle: "Add Home To Airbnb",
    currantPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    if (!home) {
      console.log("Not Found Editing Page");
      return res.redirect("/admin-home");
    }

    res.render("admin/edit-home", {
      home: home,
      pageTitle: "Your Edite Home",
      currantPage: "addHome",
      editing: editing,
    });
  });
};

exports.getAdminHome = (req, res) => {
  home.fetchhAll().then(([registerHome]) => {
    res.render("admin/adminHome-list", {
      homes: registerHome,
      pageTitle: "Admin house Page",
      currantPage: "admin-home",
    });
  });
};

exports.postAddHome = (req, res) => {
  const { name, price, location, rating, imageUrl, description } = req.body;

  const createHome = new home(
    name,
    price,
    location,
    rating,
    imageUrl,
    description
  );
  createHome.save();

  res.redirect("/admin-home");
};

exports.postUpdateHome = (req, res) => {
  const { id, name, price, location, rating, imageUrl, description } = req.body;

  const updateHome = new home(
    name,
    price,
    location,
    rating,
    imageUrl,
    description,
    id
  );
  updateHome
    .save()
    .then(() => {
      res.redirect("/admin-home");
    })
    .catch((error) => {
      console.log("Error Editing Home", error);
    });
};

exports.postDeleteHome = (req, res) => {
  let { homeId } = req.params;

  home
    .deleteById(homeId)
    .then(() => {
      res.redirect("/admin-home");
    })
    .catch((error) => {
      console.log("error while Deleteing >>> ", error);
    });
};
