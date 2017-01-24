// enable node fs to read/write to .txt files
var fs = require("fs");
// enable twitter/spotify/request node packages
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");

// var to hold location of required file
var keyFile = require("./keys.js");
// var to hold path to twitter keys
var twitterKeys = keyFile.twitterKeys;

//