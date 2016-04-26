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

var port = 9001;
// var mongoUri = 'mongodb://localhost:27017/op';

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//200 Response.

// function onRequest(request, response) {
// 	console.log('A user has made a request!' + request.url);
// 	response.writeHead(200, {"Content-Type": "text/plain" });
// 	response.end();
// }

// app.get('/', function(request, response) {
//     response.sendFile(path.join(__dirname + 'index.html'));
//     response.render('index.html');
// });






//_________________________________________________________________________________________________________________________

//Connectivity.

module.exports = router;

// mongoose.connect(mongoUri);
// mongoose.connection.once('open', function() {
//   console.log("Hey there! We are now connected to MongoDB at: ", mongoUri);
// });

app.listen(port, function() {
  console.log('Magic! Listening on port: ', port);
});