var express = require("express");
const {
  mainParameters,
  navigationItems,
  homeParameters,
} = require("../helpers/parameters");
const { routesConfiguration } = require("../helpers/routes");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("pages/index", {
    mainParameters,
    navigationItems,
    homeParameters,
    routes: routesConfiguration,
  });
});

module.exports = router;
