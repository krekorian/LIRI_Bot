# LIRI_Bot

Liri Bot is an application that helps the user to find a music on sporify, find convert venue for an artist or a band, also find information for movies.

## How to user Liri Bot
Liri Bot takes certain commands, if the incorrect command is entered the system will prompt the user that the entered commend is incorrect and the syntax need to be checked.

### Concert-this
Concert this looks for concerts fora certain artist or band, gives back venue name, location, and the date of the event.
Commend for concert-this should be enetered as following

node app.js concert-this "artist or band name"

Example: node app.js concert-this "Mark Anthony"

### spotify-this-song 
spotify-this-song look for a song, it will display singer or band's name, song's album, and a URL link for spotify.
Commend for spotify-this-song should be enetered as following

node app.js spotify-this-song "Song name"

Example: node app.js spotify-this-song "desert rose"

### Movie-this
Movie-this will query the information for a certain movie, it will preview year it came out, IMBD rating, Rotten Tomatoes rating, country of production, language availability, movie's plot and artist.
Commend for spotify-this-song should be enetered as following

node app.js movie-this "movie name"

Example: node app.js movie-this "minority report"

### do-what-it-says
do-what-it-says will read a song name from a text file and will query song's Spotify information
