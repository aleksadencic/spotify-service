const SpotifyWebApi = require("spotify-web-api-node");
const express = require("express");
const spotifyData = require("../helpers/spotify-token.json");
const router = express.Router();

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(spotifyData.access_token);

/**
 * @swagger
 * /spotify-api/user:
 *   get:
 *     description: Get user infos
 *     responses:
 *       200:
 *         description: success
 */
router.get("/user", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getMe());
  } catch (error) {
    console.error(error);
  }
});

/**
 * @swagger
 * /spotify-api/new-releases:
 *   get:
 *     description: Get new releases
 *     responses:
 *       200:
 *         description: success
 */
router.get("/new-releases", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getNewReleases());
  } catch (error) {
    console.error(error);
  }
});

/**
 * @swagger
 * /spotify-api/allbums:
 *   get:
 *     description: Get albums
 *     responses:
 *       200:
 *         description: success
 */
router.get("/albums", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getMySavedAlbums());
  } catch (error) {
    console.error(error);
  }
});

/**
 * @swagger
 * /spotify-api/recently-played-tracks:
 *   get:
 *     description: Get recently played tracks
 *     responses:
 *       200:
 *         description: success
 */
router.get("/recently-played-tracks", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getMyRecentlyPlayedTracks());
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
