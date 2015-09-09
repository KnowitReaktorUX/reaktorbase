var sass = require('gulp-sass'),
    flatten = require('gulp-flatten');

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('sass', function (cb) {
      gulp.src('app/**/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(flatten())
      .pipe(gulp.dest('./build/stylesheets'));
      cb();
    });
  };
};
