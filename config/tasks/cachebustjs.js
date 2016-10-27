var rev = require('gulp-rev'),
    del = require('del'),
    flatten = require('gulp-flatten');

require('dotenv').config();

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('cachebustjs', function (cb) {
        gulp
        .src(process.env.BUILD_PATH + '/js/app.js')
        .pipe(rev())
        .pipe(flatten())
        .pipe(gulp.dest(process.env.BUILD_PATH + 'js'));
        cb();
    });
  };
};