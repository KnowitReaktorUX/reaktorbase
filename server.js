// server.js
// load the things we need
var express = require('express');
var app = express();
var fs = require("fs");
var path = require("path");

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', '');

//views/ui/build/
app.use('/build', function(req, res, next) {
  // GET 'http://www.example.com/admin/new'
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'
  next();
});


app.use('/build', express.static(__dirname + '/build'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
//app.use('/stylesheets', express.static(__dirname + '/build/stylesheets'));
//app.use('/bower_components', express.static(__dirname + '/bower_components'));
//app.use('/js', express.static(__dirname + '/js'));
//app.use('/images', express.static(__dirname + '/images'));
//app.use('/Views/Ui/images', express.static(__dirname + '/images'));
//app.use('/Views/Ui/js', express.static(__dirname + '/js'));
//app.use('/font', express.static(__dirname + '/font'));
//app.use('/api/videostream/latest', express.static(__dirname + '/mockdata/latest.json'));

// use res.render to load up an ejs view file
// index page
app.get('/app/', function(req, res) {
    var p = "pages",
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

//app.get('/mockdata/:json_mock', function(req, res) {
//    setTimeout(function() {
//    	res.sendFile(__dirname + '/mockdata/' + req.params.json_mock);
//    },500);

//});

app.listen(8080);

//var tube = pictureTube({cols: 160});
//tube.pipe(process.stdout);
//fs.createReadStream('meta/media/miami_vice.png').pipe(tube);

console.log('Starting node server on port 8080');
