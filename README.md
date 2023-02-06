# MusicBox Service

MisicBox Service is a node/Express Web API that is providing part of the services from Spotify Web API.

## Prerequisites

- node (v18.13.0)
- npm (8.19.3)
- express (4.16.1)

## Generating Spotify Parameters

After creating app on spotify site, like in this [tutorial](https://developer.spotify.com/documentation/web-api/quick-start/), you will get parameters which you can use here to get the data from your app and account.
In file helpers/spotify-parameters.js, you need to define

- spotifyClintId,
- spotifyClintSecret,
- spotifyRedirectUri.

Also, you will need to add the same spotifyRedirectUri in app that you have already created on the spotify site.

## Generating Spotify Token

When you have all 3 parameters setted correctly, you can start command

- node spotify-app

When command is started successfully, you can open url from spotifyRedirectUri param. By default here, it is [this one](http://localhost:8888/login).

It will generate Spotify Token and update it in the file helpers/spotify-parameters.js. This token allows MusicBox Service to use data from Spotify Web Service and expiration time of token is 60 minutes.

## Start MusicBox Service

Now everything is configured, so you can start MusicBox Service with one of this commands:

- nodemon start
- npm start

After that, you can open API [here](http://localhost:3000).

## Swagger

For now, swagger is implemented only for some apis and after running the service, you can open it [here](http://localhost:3000/swagger/api-docs/).
Next step is that every route will have a swagger configuration. With creation of swagger.yaml file, it is simple to create all models and services in the UI (Angular application) by automatization. And with this feature, it will be really simple in the UI to catch all the changes from the backend.
Way of the implementation is described [here](https://swagger.io/tools/swagger-codegen/).
