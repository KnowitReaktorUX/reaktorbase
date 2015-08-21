var gulp = require("gulp");
var shell = require('gulp-shell');
var plugins = require('gulp-load-plugins')({scope: ['dependencies']});
var runSequence = require('run-sequence');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var del = require('del');

gulp.task('clean', function (cb) {
  del('components', function () {
    cb();
  });
});

gulp.task('mocha', shell.task('npm test', {
    // So our task doesn't error out when a test fails
    ignoreErrors: true
}));

gulp.task('test', function () {
  runSequence('mocha');
  gulp.watch(['components/**/*.js','test/**/*.js'], ['mocha'])
});

gulp.task('build', function () {
    browserify({
    	entries: 'components/app.js',
    	debug: true
    })
    .transform(babelify.configure({
		  stage: 0 //Use ES7 transforms
    }))
    .bundle()
    .pipe(source('./components/app.js'))
    .pipe(gulp.dest('./build'));
});



gulp.task('develop', function (cb) {
    runSequence(
        'clean',
        'build',
        'serve',
        cb
    );
});

gulp.task('watch-source', ['build']);

gulp.task('serve', function () {
    gulp.watch(['components/**/*.js', '*.html'], ['watch-source']);
});