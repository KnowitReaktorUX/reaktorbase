var browserify = require('browserify'),
    babelify = require('babelify');

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
