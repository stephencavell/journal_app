
//IMPORT POST MODEL
const Post = require('../models/post');

//CONNECT TO MONGODB
//const mongodb = 'mongodb://127.0.0.1:27017/journal';
//Post.connect(mongodb);

//EXPORT ALL POSTS:
exports.get_posts_list = function(req, res) {
	
	Post.find(function(err, posts) {
		if(err)
			res.send(err);
		res.json(posts);
	});
};

//EXPORT SINGLE POST:
exports.get_post_by_id = function(req, res) {

	let id = req.params.post_id;
	Post.findById(id, function(err, post) {
		if(err) 
			res.send(err);
		res.json(post);
	})
};

//CREATE NEW POST:
exports.create_post = function(req, res) {

	//CREATE POST OBJECT//
	let post = new Post();
	
	//ASSIGN DATA FROM REQ
	post.author = req.body.author;
	post.date = req.body.date;
	post.entry = req.body.entry;

	//SAVE THE POST
	post.save(function(err) {
		if(err)
			res.send(err);
		res.json({message: 'Post Created'});
	});
};

//UPDATE EXISTING POST:
exports.update_post = function(req, res) {
	
	let id = req.params.post_id;
	let update = {
		'entry': req.body.entry
	}

	Post.findByIdAndUpdate(id, update, function(err, post) {
		if(err) 
			res.send(err);
		res.json(post);
	});
};

//DELETE EXISTING POST:
exports.delete_post = function(req, res) {
	
	let id = req.params.post_id;

	Post.findByIdAndRemove(id, function(err, post) {
		if(err)
			res.send(err);
		res.json(post);
	})
}