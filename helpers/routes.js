exports.routesConfiguration = {
  columns: ["", "Method", "Uri"],
  configurations: [
    {
      name: "User Info",
      method: "GET",
      path: "http://localhost:3000/spotify-api/user",
    },
    {
      name: "New Releases",
      method: "GET",
      path: "http://localhost:3000/spotify-api/new-releases",
    },
    {
      name: "Albums",
      method: "GET",
      path: "http://localhost:3000/spotify-api/albums",
    },
    {
      name: "Recently played tracks",
      method: "GET",
      path: "http://localhost:3000/spotify-api/recently-played-tracks",
    },
  ],
};
