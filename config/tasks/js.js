var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify'),
    flatten = require('gulp-flatten');

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('js', function (cb) {
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
  };
};
