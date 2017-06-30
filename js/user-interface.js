var Gituser = require("./../js/request.js").userModule;

$(document).ready(function() {
  $("#searchButton").click(function() {
    
    var userName = $('#lookUp').val();
    var newUser = new Gituser(userName);
    newUser.searchName();
    newUser.lookRepos();
  });
});
