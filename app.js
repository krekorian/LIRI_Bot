var Spotify = require('node-spotify-api');

var ids = {
    id: 'd3594225390a46b1b0a7e67ef13a3ade',
    secret: 'f3a7a06678b64dfbaca4bcad3e068a10'
}

var keys = require("./keys.js");

spotify.search({ type: 'track', query: 'I Want it That Way', limit: 50 })
    .then(function (response) {
        // console.log(response.artists.items[1]);
        console.log(response.tracks.items[0].album.artists[0].name);
        console.log(response.tracks.items[0].name);
        console.log(response.tracks.items[0].album.artists[0].external_urls.spotify);
    })
    .catch(function (err) {
        console.log(err);
    })