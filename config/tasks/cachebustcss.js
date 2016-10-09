var rev = require('gulp-rev'),
    del = require('del'),
    flatten = require('gulp-flatten');

require('dotenv').config();

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('cachebustcss', function (cb) {
        gulp
        .src(process.env.BUILD_PATH + '/stylesheets/app.css')
        .pipe(rev())
        .pipe(flatten())
        .pipe(gulp.dest(process.env.BUILD_PATH + 'stylesheets'));
        cb();
    });
  };
};