//server.js


// BASE SETUP

// =============================

// call necessary packages
var express = require('express');
var app = express();

var bodyParser = require('body-parser');


var mongoose = require('mongoose');
var mongodb = 'mongodb://127.0.0.1:27017/'

mongoose.connect(mongodb);

var Person = require('./app/models/person');

//configure app to use bodyParser()
//this will let us get data from a POST
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//set port
var port = process.env.PORT || 8080;

// ROUTES
//==============================

//get an instance of router
var router = express.Router();

//middleware to use for all requests
router.use(function(req, res, next) { 
	//just put in a console log
	console.log('something is happening.');
	next();
});

//test route
router.get('/', function(req, res) {
	res.json({message: 'hooray, welcome to the api'});
});

//more api routes to come

//on routes that end in people
router.route('/people')

	//create a person (accessed at POST http://localhost:8080/api/people)
	.post(function(req, res) {

		var person = new Person();
		person.name = req.body.name;

		//save the person and check for errors
		person.save(function(err) {
			if(err)
				res.send(err);

			res.json({message: 'Person Created!'});
		});
	})

	//retrieve all persons (accessed at GET http://localhost:8080/api/people)
	.get(function(req, res) {
		Person.find(function(err, persons) {
			if (err) 
				res.send(err);
			res.json(persons);
		});
	});

//register our routes,they will be prefixed with /api
app.use('/api', router);

// START THE SERVER
//=============================

app.listen(port);
console.log('Magic happens on port ' + port);