var express = require("express");
var router = express.Router();
var swaggerJsDoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  openapi: "3.0.3",
  definition: {
    info: {
      title: "MusicBOX Service",
      description: "API Service for managing data from Spotify",
      version: "1.0.0",
    },
    contact: {
      name: "Aleksa Dencic",
      email: "aleksa.dencic@hotmail.com",
      url: "aleksa.dencic@hotmail.com",
    },
  },
  apis: ["routes/spotify.js"],
};

var swaggerDocs = swaggerJsDoc(swaggerOptions);

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

router.get("/api-docs-json", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerDocs);
});

module.exports = router;
