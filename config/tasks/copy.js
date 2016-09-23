const runSequence = require('run-sequence');
const flatten = require('gulp-flatten');

module.exports = (gulp, plugins) => {
  return () => {
    //COPY
    gulp.task('copy', (cb) => {
      runSequence(
          ['copy.images', 'copy.fonts'],
          cb
      );
    });

    //COPY.IMAGES
    gulp.task('copy.images', (cb) => {
      gulp.src(process.env.MOCK_IMAGES + '**/*', { base: process.env.MOCK_IMAGES })
        .pipe(gulp.dest(process.env.BUILD_PATH + 'images'));
      cb();
    });

    //COPY.FONTS
    gulp.task('copy.fonts', (cb) => {
      gulp.src(process.env.MOCK_FONTS + '**/*', { base: process.env.MOCK_FONTS })
        .pipe(gulp.dest(process.env.BUILD_PATH + 'fonts'));
      cb();
    });
  };
};
