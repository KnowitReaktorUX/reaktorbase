// server.js
// load the things we need
var express = require('express');
var app = express();
var fs = require("fs");
var path = require("path");

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', '');

app.use('/build', express.static(__dirname + '/build'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
    var p = "app/pages/page-start",
        pages = [];

    fs.readdir(p, function (err, files) {
	    if (err) throw err;

        files.map(function (file) { return path.join(p, file); })
            .filter(function (file) { return fs.statSync(file).isFile(); })
            .forEach(function (file) {
		      pages.push({
		          filename: file,
		          basename: path.basename(file, '.ejs')
		      });
	    });

    	res.render('index', {pages:pages});
	});
});

// render page
app.get('/app/pages/:page_html', function(req, res) {
    res.render('app/pages/' + req.params.page_html);
});

app.listen(8080);
