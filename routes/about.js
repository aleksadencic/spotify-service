var express = require("express");
const {
  mainParameters,
  navigationItems,
  aboutParameters,
} = require("../helpers/parameters");
var router = express.Router();

/* GET about page */
router.get("/", (req, res, next) => {
  res.render("pages/about", {
    mainParameters,
    navigationItems,
    aboutParameters,
  });
});

module.exports = router;
