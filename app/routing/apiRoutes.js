var express = require('express');
var path = require('path');
var app = express();

var friendsInfo	= require('../data/friends.js');

function matchFriends () {
	var userScore = 0;
	for (var i = 0; i < friendsInfo.length; i++) {
		for (var b = 0; b < friendsInfo[i].scores.length; b++) {
			userScore += friendsInfo[i].scores[j];
		}
	}
}

module.exports = function(app){

	app.get('/api/friends', function(req, res) {
		res.json(friendsInfo);
	});

	app.post('/api/friends', function(req, res) {
		var matchFriends = req.body;
		friendsInfo.push(matchFriends);
		res.json(friendsInfo);
		checkScores();
	});

	app.post('/api/clear', function(req, res) {
		friendsInfo = [];
	})
}