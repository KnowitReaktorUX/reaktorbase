var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify'),
    flatten = require('gulp-flatten');

require('dotenv').config();

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('js', function (cb) {
        browserify({
        	entries: 'app/framework/app.js',
        	debug: true
        })
        .transform(babelify.configure({
          presets: ['es2015', 'react'],
        }))
        .bundle()
        .pipe(source('app/framework/app.js'))
        .pipe(flatten())
        .pipe(gulp.dest(process.env.BUILD_PATH + 'js'));
        cb();
    });
  };
};
