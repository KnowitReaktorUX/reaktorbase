var flatten = require('gulp-flatten');

module.exports = function (gulp, plugins) {
  return function () {
    //change to template names to .hbs, look att contains "template" instead.
    gulp.task('templates', function (cb) {
      gulp.src('app/**/*.template')
        .pipe(flatten())
        .pipe(gulp.dest(process.env.BUILD_PATH + 'templates'));
        cb();
    });
  };
};
