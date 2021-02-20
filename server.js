//Dependencies.
var express = require('express');
var router = express.Router();
// var sendgrid  = require('sendgrid')(process.env.U, process.env.PASSWORD)
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var http = require('http');
var path = require('path');
var fs = require('fs');
var dotenv = require('dotenv');
passport = require('passport');
var passport = require('passport');

var port = 9001;
// var mongoUri = 'mongodb://localhost:27017/blog-app';

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//Blog Data & Data Storage.
//_________________________________________________________________________________________________________________________


var Schema = mongoose.Schema;

var blogSchema = new Schema({
	title : {type: String, minlength: 8, maxlength: 50, required: true},
	body : {type: String, required: true},
	author : {type: String, min: 3, max: 40, required: true},
	pubdate : {type: Date, default: Date.now},
	subject : {type: String}
});

var Blog = mongoose.model('Blog', blogSchema);

//Routes.
//_________________________________________________________________________________________________________________________

// GET BLOGS!
app.get('/api/blogs', function(req, res) {
	Blog.find(function (err, blogs) {
		if (err)
			res.send(err);
		res.json(blogs);
	});
});

// GET BLOG BY ID!
app.get('/api/blogs/:blog_id', function(req, res) {
	
	var id = req.params.blog_id;

	Blog.findById(id, function(err, blog) {
		if (err)
			res.send(err);
		res.json(blog);
	});
});

// POST BLOG!
app.post('/api/blogs', function(req, res) {
	Blog.create({
		title: req.body.title,
		body: req.body.body,
		author: req.body.author,
		date: req.body.date
	}, function(err, blog) {
		if (err)
			res.status(400, "The title is too long.").send(blog);
		Blog.find(function(err, blogs) {
			if (err)
				res.status(400);
			res.json(blogs);
		});
	});
});

// DELETE BLOG!
app.delete('/api/blogs/:blog_id', function(req, res) {

	Blog.remove({
		_id: req.params.blog_id
	}, function(err, blog) {
		if (err)
			res.send(err);
		Blog.find(function(err, blogs) {
			if (err)
				res.send(err);
			res.json(blogs);
		});
	});
});

// mongoose.connect(mongoUri);
// mongoose.connection.once('open', function() {
//   console.log("Hey there! We are now connected to MongoDB at: ", mongoUri);
// });

app.listen(port, function() {
  console.log('Magic! Listening on port: ', port);
});