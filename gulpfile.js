var gulp = require("gulp");
var shell = require('gulp-shell');
var plugins = require('gulp-load-plugins')({scope: ['dependencies']});
var runSequence = require('run-sequence');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var del = require('del');
var sass = require('gulp-sass');
var run = require('gulp-run');
//gulp-watch

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

//BUILD
gulp.task('js', function (cb) {
    //JS
    browserify({
    	entries: 'app/components/app.js',
    	debug: true
    })
    .transform(babelify.configure({
		  stage: 0 //Use ES7 transforms
    }))
    .bundle()
    .pipe(source('app/components/app.js'))
    .pipe(gulp.dest('./build'));
    cb();
});

//DEVELOP
gulp.task('develop', function (cb) {
    runSequence(
        'clean',
        'bower',
        ['js', 'sass', 'templates'],
        'serve',
        'server',
        cb
    );
});

//SASS
gulp.task('sass', function (cb) {
  gulp.src('app/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./build/stylesheets'));
    cb();
});

//SERVER
// Use gulp-run to start a pipeline
gulp.task('server', function () {
  run('node server.js').exec()    // Writes "Hello World\n" to output/echo.
})

//Fetch Bower components
gulp.task('bower', function () {
  run('bower update').exec()    // Writes "Hello World\n" to output/echo.
})


//TEMPLATES
gulp.task('templates', function (cb) {
  gulp.src('app/**/*.template')
    .pipe(gulp.dest('./build/templates'));
    cb();
});
//change to template names to .ejs, look att contains "template" instead.
//gulp-flatten - remove folder structure in destination.

gulp.task('watch-source', ['js']);

gulp.task('serve', function () {
    gulp.watch(['app/components/**/*.js', '*.html', 'app/components/**/*.scss'], ['watch-source']);
});
