var SpotifyWebApi = require("spotify-web-api-node");
var express = require("express");
var { spotifyClientParams } = require("./helpers/spotify-parameters");
var fs = require("fs");

var scopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "app-remote-control",
  "user-read-email",
  "user-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-library-modify",
  "user-library-read",
  "user-top-read",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-follow-read",
  "user-follow-modify",
];

var spotifyApi = new SpotifyWebApi({
  clientId: spotifyClientParams.spotifyClintId,
  clientSecret: spotifyClientParams.spotifyClintSecret,
  redirectUri: spotifyClientParams.spotifyRedirectUri,
});

var app = express();

app.get("/login", (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get("/callback", (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

  if (error) {
    console.error("Callback Error:", error);
    res.send(`Callback Error: ${error}`);
    return;
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const access_token = data.body["access_token"];
      const refresh_token = data.body["refresh_token"];
      const expires_in = data.body["expires_in"];

      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      var spotidyData = {
        access_token: access_token,
        refresh_tokne: refresh_token,
        expires_in: expires_in,
      };

      fs.writeFile(
        "helpers/spotify-token.json",
        JSON.stringify(spotidyData),
        (err) => {
          if (err) console.log(err);
        }
      );
      res.send("Successfull login! You can now close the window.");

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body["access_token"];
        spotifyApi.setAccessToken(access_token);
      }, (expires_in / 2) * 1000);
    })
    .catch((error) => {
      res.send(`Error getting Tokens: ${error}`);
    });
});

app.listen(8888, () =>
  console.log(
    "HTTP Server up. Now go to http://localhost:8888/login in your browser."
  )
);
