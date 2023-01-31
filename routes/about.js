var express = require("express");
const {
  mainParameters,
  navigationItems,
  aboutParameters,
} = require("../helpers/parameters");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("pages/about", {
    mainParameters,
    navigationItems,
    aboutParameters,
  });
});

module.exports = router;
