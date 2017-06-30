var Gituser = require("./../js/request.js").userModule;

$(document).ready(function() {
  $("#searchButton").click(function() {
    
    var userName = $('#lookUp').val();
    var newUser = new Gituser(userName);
    newUser.searchName();
    newUser.lookRepos();
  });
});

var apiKey = require("./../.env").apiKey;

function Gituser(userName) {
  this.userName = userName;
  //this.repoName=repoName;
}
Gituser.prototype.searchName = function() {
  $.get('https://api.github.com/users/' + this.userName + '?access_token=' + apiKey).then(function(response) {
    $('.results').text(response.name);
    $('.image').append('<img src="'+response.avatar_url+'">')
    $('.totalRepos').text(response.public_repos);
    $('.repos').append('<a href="https://github.com/' + this.userName + '?tab=repositories">' + response.repos_url + '</a>');
  }).fail(function(error) {
    alert("Sorry,try searching with the username");
  });
};

Gituser.prototype.lookRepos=function(){

$.get('https://api.github.com/users/' + this.userName + '/repos?access_token=' + apiKey).then(function(response) {
  for(var j=0; j<response.length; j++){
    $('.projects').append('<li>'+ response[j].name +'</li>');
    $('.description').append('<li>'+ response[j].description +'</li>');
  }
});
};
exports.userModule = Gituser;
