var axios = require("axios");

var fs = require("fs");

var TV = require("./tv.js");

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");

//saying that if the user just entered "node cli.js" ==> defaults to show and the andy griffith show
if (!search) {
    search = "show";
}

if( !term) {
    term = "Andy Griffith"
    userQuery = new TV;
    userQuery.findShow(term);
}

if (search === "show") {
    console.log("Searching for TV show")
} else {
    console.log("Searching for TV actor")
}

console.log(search + " " + term);
