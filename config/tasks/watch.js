module.exports = function (gulp, plugins) {
  return gulp.task('watch', () => {
    gulp.watch(['*.js', 'app/**/*.js'], ['buildJS']);
    gulp.watch(['*.html', 'app/**/*.html'], ['buildHTML']);
    gulp.watch(['app/**/*.scss'], ['buildSCSS']);
  });
};
