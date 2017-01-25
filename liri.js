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

// var to hold command to perform
var command = process.argv[2];

// var for request
var userRequest = "";
// var to hold inputs if request is more than one word
var requestArray = [];

// statement to check if proper arguments passed into terminal
if (command == "my-tweets" || command == "spotify-this-song" ||
    command == "movie-this" || command == "do-what-it-says") {
    console.log("Command: " + command);
    log("log.txt", command);
}
else {
    console.log("Invalid command");
    log("error_log.txt", command);
    return;
};

// if statement for process.argv with length of 4
if (process.argv.length == 4) {
    userRequest = process.argv[3];
    console.log(userRequest);
};

// if statement for process.argv with length greater than 4
if (process.argv.length > 4) {
    for (var i = 3; i < process.argv.length; i++) {
        requestArray.push(process.argv[i]);
    };
    userRequest = requestArray.join(" ");
    console.log(userRequest);
};

if (command == "my-tweets") {
    // var to get twitter keys from path
    var client = new twitter({
        consumer_key: twitterKeys.consumer_key,
        consumer_secret: twitterKeys.consumer_secret,
        access_token_key: twitterKeys.access_token_key,
        access_token_secret: twitterKeys.access_token_secret
    });

    client.get("statuses/user_timeline", function(err, tweets) {
        if (err) throw err;
        if (!err) {
            for (var tweet = 0; tweet < tweets.length; tweet++) {
                console.log(tweets[tweet].text);
            };
        }
        else {
            throw err;
        };
    })
}

// function to log commands to appropriate txt files
// NOT PERFECT <-- revisit later
function log(file, command) {
    fs.appendFile(file, command + ", ", function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Appended to appropriate log.");
        }
    })
};