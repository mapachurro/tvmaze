
var axios = require("axios");

var fs = require("fs");


var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL)
      .then(function (response) {
        showData = response.data;
        showName = response.data.name;
        showGenre = response.data.genres;
        showRating = response.data.rating.average;
        showNetwork = response.data.network.name;
        showSummary = response.data.summary;

        var appendText = (showName + ". " + showGenre + ". " + showRating + ". " + showNetwork + ". " + showSummary);
        fs.appendFile("log.txt", appendText, function (err) {
          if (err) {
            console.log("Whups!" + err);
          }

          else {
            console.log("Content Added!");
          }

        })

      })
      .catch(function (error) {
        console.log(error);
      })
  };
};

module.exports = TV;
