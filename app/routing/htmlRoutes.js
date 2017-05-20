// var express = require('express');
var path = require('path');
// var app = express();
// same comment as in apiRoutes about not needing to instantiate another express app.

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}