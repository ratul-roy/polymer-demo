/**
 * Created by ashrith.kulai on 10/27/16.
 */
var fs = require('fs');
var path = require('path');
// if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
// 	var config = JSON.parse(fs.readFileSync('/opt/mount/config/config.json', 'utf8'));
// } else {
// 	var config = require('config');
// }

//var compression = require('compression');

var express = require('express');
//var proxy = require('express-http-proxy');


//var cookieParser = require('cookie-parser');
//var csrf = require('csurf');

var app = express();
//app.use(compression());
app.use(express.static(__dirname));

app.get('/*', function (req, res) {
	// var MyLocale = ['hi'],
	// 	filePath = "index",
	// 	olaUser = {};
	// if (MyLocale.indexOf(req.query.locale) > -1) {
	// 	filePath = filePath + "." + req.query.locale + ".pug";
	// }
	// if (req.cookies.owv) {
	// 	olaUser = {
	// 			isLoggedIn: true,
	// 			paymentType: 0
	// 		};
	// } else {
	// 	olaUser = {
	// 		isLoggedIn: false,
	// 		paymentType: 1
	// 	};
	// }
	// if (config.enableCSRF) {
	// 	res.cookie('XSRF-TOKEN', req.csrfToken(), {path: '/', secure: true});
	// }
	res.sendFile("index.html");

});
app.listen(7777, function () {
		console.log('CBP app listening on port 7777!');
	});