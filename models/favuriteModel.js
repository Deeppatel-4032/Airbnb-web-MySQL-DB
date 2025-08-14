// local module
const db = require("../data/database");

module.exports = class Favourite {
  static addToFavourite(homeId) {
    Favourite.getToFavourite().then((homes) => {
      const home = homes[0];
    });
  }

  static getToFavourite() {}

  static deleteById(delHomeId) {}
};
