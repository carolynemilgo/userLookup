(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey="56dc082e107507775c8aa62298b2a0847abd7c3c";

},{}],2:[function(require,module,exports){
//backend-logic
var apiKey = require("./../.env").apiKey;

function Gituser(userName) {
  this.userName = userName;
  }
Gituser.prototype.searchName = function() {
  $.get('https://api.github.com/users/' + this.userName + '?access_token=' + apiKey).then(function(response) {

    $('.results').text(response.name);
    $('.image').append('<img src="' + response.avatar_url + '">');
    $('.totalRepos').text(response.public_repos);
    $('.repos').append('<a href="https://github.com/' + this.userName + '?tab=repositories">' + response.repos_url + '</a>');
  }).fail(function(error) {
    alert("Sorry,try searching with the username");
  });
};

Gituser.prototype.lookRepos = function() {

  $.get('https://api.github.com/users/' + this.userName + '/repos?access_token=' + apiKey).then(function(response) {
    $("table.tableStyle").show();
    $("div.stats").show();
    for (var j = 0; j < response.length; j++) {
      $('.projects').append('<li>' + response[j].name + '</li>');
      $('.description').append('<li>' + response[j].description + '</li>');

    }
  });
};
exports.userModule = Gituser;

},{"./../.env":1}],3:[function(require,module,exports){
//user-interface logic
var Gituser = require("./../js/request.js").userModule;

$(document).ready(function() {
  $("form#search").submit(function(event) {
    event.preventDefault();

    var userName = $('#lookUp').val();
    $('#lookUp').val("");
    var newUser = new Gituser(userName);
    newUser.searchName();
    newUser.lookRepos();
  });
});

//backend-logic
var apiKey = require("./../.env").apiKey;

function Gituser(userName) {
  this.userName = userName;
  }
Gituser.prototype.searchName = function() {
  $.get('https://api.github.com/users/' + this.userName + '?access_token=' + apiKey).then(function(response) {

    $('.results').text(response.name);
    $('.image').append('<img src="' + response.avatar_url + '">');
    $('.totalRepos').text(response.public_repos);
    $('.repos').append('<a href="https://github.com/' + this.userName + '?tab=repositories">' + response.repos_url + '</a>');
  }).fail(function(error) {
    alert("Sorry,try searching with the username");
  });
};

Gituser.prototype.lookRepos = function() {

  $.get('https://api.github.com/users/' + this.userName + '/repos?access_token=' + apiKey).then(function(response) {
    $("table.tableStyle").show();
    $("div.stats").show();
    for (var j = 0; j < response.length; j++) {
      $('.projects').append('<li>' + response[j].name + '</li>');
      $('.description').append('<li>' + response[j].description + '</li>');

    }
  });
};
exports.userModule = Gituser;

},{"./../.env":1,"./../js/request.js":2}]},{},[3]);
