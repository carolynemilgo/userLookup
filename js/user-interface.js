//user-interface logic
var Gituser = require("./../js/request.js").userModule;

$(document).ready(function() {

  $("form#search").submit(function(event) {
    event.preventDefault();

  $("#searchButton").click(function() {


    var userName = $('#lookUp').val();
    $('#lookUp').val("");
    var newUser = new Gituser(userName);
    newUser.searchName();
    newUser.lookRepos();
    $("#repo").empty();
  });
});
