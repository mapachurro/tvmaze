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
    userQuery = new TV;
    userQuery.findShow(term);

} 

// if (!search) {
//     search = "actor";
// }

// if( !term) {
//     term = "Andy Griffith"
//     userQuery = new TV;
//     userQuery.findActor(term);
// }

if (search === "actor") {
    console.log("Searching for actor")
    userQuery = new TV;
    userQuery.findActor(term);
}

else {
    console.log("Searching for TV actor")
}

console.log(search + " " + term);
