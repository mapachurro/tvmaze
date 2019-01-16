
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




  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;
  
    axios.get(URL)
    .then(function (response) {
      var actorName = response.data[0].person.name; 
      var actorBirthday = response.data[0].person.birthday;
      var actorGender = response.data[0].person.gender;
      var actorCountry = response.data[0].person.country.name;
      var actorURL = response.data[0].person.url;
      
      var appendText = (actorName + ". " + actorBirthday + ". " + actorGender + ". " + actorCountry + ". " + actorURL);      
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
