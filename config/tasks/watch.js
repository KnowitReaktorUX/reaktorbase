module.exports = function (gulp, plugins) {
  return gulp.task('watch', () => {
      gulp.watch(['*.html', 'app/**/*.html', 'app/**/*.scss'], ['build']);
  });
};
