//server.js


// BASE SETUP

// =============================

//IMPORT EXPRESS AND CREATE EXPRESS APP//
const express = require('express');
const app = express();

//IMPORT BODYPARSER AND CONFIGURE APP TO USE IT//
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//IMPORT MONGOOSE AND SET DATABASE CONNECTION//
const mongoose = require('mongoose');
const mongodb = 'mongodb://127.0.0.1:27017/journal'
mongoose.connect(mongodb);

//IMPORT ROUTES//
const posts = require('./app/routes/posts-routes');

//SET PORT//
const port = process.env.PORT || 8080;

// ROUTES
//==============================

/*
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

router.route('/posts')

	//route for saving new post
	.post(function(req, res) {
		//create post object
		let post = new Post();
		//assign data from req
		post.author = req.body.author;
		post.date = req.body.date;
		post.entry = req.body.entry;

		//save the post
		post.save(function(err) {
			if(err)
				res.send(err);
			res.json({message: 'Post Created'});
		});

	})
	//route for retrieving list of all posts
	.get(function(req, res) {
		//retrieve all posts
		Post.find(function(err, posts) {
			if(err)
				res.send(err);
			res.json(posts);
		});
	});

//router for specific id
router.route('/posts/:post_id')

	.put(function(req, res) {

	});
*/
//register our routes,they will be prefixed with /api
app.use('/', posts);

// START THE SERVER
//=============================

app.listen(port);
console.log('Magic happens on port ' + port);