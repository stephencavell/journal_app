//post.js

//import mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
	author: String,
	date: Date,
	entry: String,

});

//virtual for easy post url retrieval
PostSchema.virtual('url').get(function () {
	return '/posts/' + this._id;
});

//Export module
module.exports = mongoose.model('Post', PostSchema);