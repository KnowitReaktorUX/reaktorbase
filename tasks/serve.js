module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('serve', function () {
        gulp.watch(['app/**/*.js', '*.html', 'app/**/*.html', 'app/**/*.scss'], ['build']);
    });
  };
};
