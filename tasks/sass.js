var sass = require('gulp-sass'),
    flatten = require('gulp-flatten');

require('dotenv').config();

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('sass', function (cb) {
      gulp.src('app/**/*.scss')
      .pipe(sass({
        includePaths: ['node_modules/foundation-sites/scss'],
      }).on('error', sass.logError))
      .pipe(flatten())
      .pipe(gulp.dest(process.env.BUILD_PATH + 'stylesheets'));
      cb();
    });
  };
};
