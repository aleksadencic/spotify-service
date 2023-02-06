exports.routesConfiguration = {
  columns: ["", "Method", "Uri"],
  configurations: [
    {
      name: "User Info",
      method: "GET",
      path: {
        name: "/spotify-api/user",
        url: "http://localhost:3000/spotify-api/user",
      },
    },
    {
      name: "New Releases",
      method: "GET",
      path: {
        name: "/spotify-api/new-releases",
        url: "http://localhost:3000/spotify-api/new-releases",
      },
    },
    {
      name: "Albums",
      method: "GET",
      path: {
        name: "/spotify-api/albums",
        url: "http://localhost:3000/spotify-api/albums",
      },
    },
    {
      name: "Album Tracks",
      method: "GET",
      path: {
        name: "/spotify-api/album-tacks/id",
        url: "http://localhost:3000/spotify-api/album-tracks/1/tracks",
      },
    },
    {
      name: "Recently played tracks",
      method: "GET",
      path: {
        name: "/spotify-api/recently-played-tracks",
        url: "http://localhost:3000/spotify-api/recently-played-tracks",
      },
    },
  ],
};
