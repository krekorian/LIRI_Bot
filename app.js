var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var moment = require('moment');

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var argOne = process.argv[2];
var argTwo = process.argv[3];

switch (argOne) {
    case "concert-this":
        concertfinder(argTwo);
        break;
    case "spotify-this-song":

        if (argTwo === undefined) {
            argTwo = "The Sign"
        }


        spotifyfunc(argTwo);

        break;
    case "movie-this":
        if (argTwo === undefined) {
            argTwo = "Mr NoBody,"
        }
        findmovie(argTwo);

        break;
    case "do-what-it-says":

        var data = fs.readFileSync('random.txt');
        console.log("Arg two:" + data);
        spotifyfunc(data);
        break;


    default:
        // when incorrect command is entered
        console.log("Incorrect command is entered, please check the syntax.");
}

//run spotify function to query song tracks
function spotifyfunc(argTwo) {
    console.log("Looking for tracks for " + argTwo);
    console.log("_______________________________________");
    // console.log(argOne, argTwo);
    // console.log("searching a song")
    spotify.search({ type: 'track', query: argTwo, limit: 50 })
        .then(function (response) {
            // console.log(response.tracks.items[0]);
            for (var i = 0; i < response.tracks.items.length; i++) {
                console.log("Artist name:" + response.tracks.items[i].album.artists[0].name);
                console.log("Album name:" + response.tracks.items[i].album.name);
                console.log("Track name:" + response.tracks.items[i].name);
                console.log("URL link: " + response.tracks.items[i].album.artists[0].external_urls.spotify);
                console.log("*******************************");
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

//run ombd API to search for a movie
function findmovie(argTwo) {
    console.log("Looking for movies " + argTwo);
    console.log("_______________________________________");
    var array = argTwo.split(" ");
    var searchName = array.join("+");

    axios
        .get("http://www.omdbapi.com/?t=" + searchName + "&apikey=dbb2f869")
        .then(function (response) {
            // If the axios was successful...
            // Then log the body from the site!
            console.log("Movie Name: " + response.data.Title);
            console.log("Year came out: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Production country: " + response.data.Country);
            console.log("Movie's Language: " + response.data.Language);
            console.log("Movie's plot: " + response.data.Plot);
            console.log("Movie's actors: " + response.data.Actors);

        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}




function concertfinder(argTwo) {
    console.log("Looking for concert for " + argTwo);
    console.log("_______________________________________");
    var array = argTwo.split(" ");
    var searchName = array.join("");
    // console.log(searchName);
    axios
        .get("https://rest.bandsintown.com/artists/" + searchName + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // If the axios was successful...
            // Then log the body from the site!

            for (var j = 0; j < response.data.length; j++) {
                console.log("Venue Name: " + response.data[j].venue.name);
                console.log("Venue Location: " + response.data[j].venue.city + ", " + response.data[0].venue.country);
                var timedate = response.data[j].datetime;
                console.log("Event Date: " + moment(timedate).format('MM/DD/YYYY'));
                console.log("*******************************");
            }

        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}







