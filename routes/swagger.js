var express = require("express");
var router = express.Router();
var swaggerJsDoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    info: {
      title: "Spotify Service",
      version: "1.0.0",
    },
  },
  apis: ["routes/spotify.js"],
};

var swaggerDocs = swaggerJsDoc(swaggerOptions);

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

router.get(".api-docs-json", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocs);
});

module.exports = router;
