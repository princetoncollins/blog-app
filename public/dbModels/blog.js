var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
	title : {type: String, min: 8, max: 50, required: true},
	body : {type: String, required: true},
	author : {type: String, min: 3, max: 40, required: true},
	pubdate : {type: Date, default: Date.now}
});

var Blog = mongoose.model('Blog', blogSchema);