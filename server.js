//server.js


// BASE SETUP

// =============================

var express = require('express');
var app = express();
var port = 8080;

// ROUTES
//==============================

//get an instance of router
var router = express.Router();

// route middleware that will happen on every request

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
	res.send('im the home page!');
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
	res.send('im the about page!');
});

app.use('/', router);

// START THE SERVER
//=============================

app.listen(port);
console.log('Magic happens on port ' + port);