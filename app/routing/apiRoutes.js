// var express = require('express');
var path = require('path');
// var app = express();
// You don't need to instantiate another express app since you're passing it into the function exported by module.exports.

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
		// by defining this here, you're shadowing the outer `mathFriends` function.
		// Also, it's alittle misleading, since `req.body` is actually the user's survey response.
		var matchFriends = req.body;
		friendsInfo.push(matchFriends);
		res.json(friendsInfo);
		// you're not defining `checkScores` anywhere
		// checkScores();
	});

	app.post('/api/clear', function(req, res) {
		friendsInfo = [];
	})
}