const SpotifyWebApi = require("spotify-web-api-node");
const express = require("express");
const spotifyData = require("../helpers/spotify-token.json");
const router = express.Router();

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(spotifyData.access_token);

router.get("/user", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getMe());
  } catch (error) {
    console.error(error);
  }
});

/**
 * @swagger
 * /new-releases:
 *   get:
 *     description: Get new releases
 *     responses:
 *       201:
 *         description: Completed
 */
router.get("/new-releases", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getNewReleases());
  } catch (error) {
    console.error(error);
  }
});

router.get("/albums", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getMySavedAlbums());
  } catch (error) {
    console.error(error);
  }
});

router.get("/recently-played-tracks", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getMyRecentlyPlayedTracks());
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
