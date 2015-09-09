var gulp = require("gulp"),
    shell = require('gulp-shell'),
    plugins = require('gulp-load-plugins')({scope: ['dependencies']}),
    runSequence = require('run-sequence'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    del = require('del'),
    sass = require('gulp-sass'),
    run = require('gulp-run'),
    flatten = require('gulp-flatten'),
    connect = require('gulp-connect'),
    assemble = require('assemble');
    //gulp-watch

//DEVELOP
gulp.task('develop', function (cb) {
    runSequence(
        'clean',
        ['js', 'sass', 'templates'],
        'serve',
        'connect',
        //'server',
        cb
    );
});

//CONNECT
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: false
  });
});

//CLEAN
gulp.task('clean', function (cb) {
  del('js', cb() );
});

//JS: MOCHA
gulp.task('mocha', shell.task('npm test', {
    // So our task doesn't error out when a test fails
    ignoreErrors: true
}));

//JS: TEST
gulp.task('test', function () {
  runSequence('mocha');
  gulp.watch(['app/**/*.js','test/**/*.js'], ['mocha'])
});

//JS: BUILD
gulp.task('js', function (cb) {
    //JS
    browserify({
    	entries: 'app/framework/app.js',
    	debug: true
    })
    .transform(babelify.configure({
		  stage: 0 //Use ES7 transforms
    }))
    .bundle()
    .pipe(source('app/framework/app.js'))
    .pipe(flatten())
    .pipe(gulp.dest('./build/js'));
    cb();
});

//SASS
gulp.task('sass', function (cb) {
  gulp.src('app/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(flatten())
    .pipe(gulp.dest('./build/stylesheets'));
    cb();
});

//SERVER
//gulp.task('server', function () {
//  run('node server.js').exec()
//})

//Fetch Bower & npm components
gulp.task('setup', function () {
  var bower_complete = false,
      npm_complete = false;
  //complete
  var complete = function () {
    if (bower_complete && npm_complete) {
      run('asciify "Complete" -f larry3d').exec();
    }
  };
  //bower
  run('bower update').exec(function (status) {
    console.log('-------------------- BOWER UPDATE: ' + ((status + '') === 'null' ? 'OK' : status) + ' --------------------');
    bower_complete = true;
    complete();
  })
  //npm
  run('npm install').exec(function (status) {
    console.log('-------------------- NPM INSTALL: ' + ((status + '') === 'null' ? 'OK' : status) + ' --------------------');
    npm_complete = true;
    complete();
  })
})

//TEMPLATES
//change to template names to .ejs, look att contains "template" instead.
//gulp-flatten - remove folder structure in destination.
gulp.task('templates', function (cb) {
  gulp.src('app/**/*.template')
    .pipe(flatten())
    .pipe(gulp.dest('./build/templates'));
    cb();
});

gulp.task('watch-source', ['js']);

gulp.task('serve', function () {
    gulp.watch(['app/**/*.js', '*.html', 'app/**/*.scss'], ['watch-source']);
});
