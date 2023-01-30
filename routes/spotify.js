const SpotifyWebApi = require("spotify-web-api-node");
const express = require("express");
const { token } = require("../helpers/spotify-parameters");
const router = express.Router();

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

/* GET user data */
router.get("/user", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getMe());
  } catch (error) {
    console.error(error);
  }
});

/* GET new releases */
router.get("/new-releases", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getNewReleases());
  } catch (error) {
    console.error(error);
  }
});

/* GET albums */
router.get("/albums", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getMySavedAlbums());
  } catch (error) {
    console.error(error);
  }
});

/* GET recently viewed */
router.get("/recently-played-tracks", async (req, res, next) => {
  try {
    res.json(await spotifyApi.getMyRecentlyPlayedTracks());
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
