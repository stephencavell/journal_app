//post.js

//import mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
	author: String,
	body: String,

});

//virtual for easy post url retrieval
PostSchema.virtual('url').get(function () {
	return '/entries/' + this._id;
});

//Export module
module.exports = mongoose.model('Post', PostSchema);