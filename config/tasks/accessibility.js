const access = require('gulp-accessibility');
const rename = require('gulp-rename');

module.exports = function (gulp, plugins) {
    return gulp.task('accessibility', () => {
      gulp.src(process.env.BUILD_PATH + 'mockups/**/*.html')
      .pipe(access({
        force: true,
      }))
      .on('error', console.log)
      .pipe(access.report({
        reportType: 'txt',
      }))
      .pipe(rename({
        extname: '.txt',
      }))
      .pipe(gulp.dest(process.env.BUILD_PATH + 'mockups/reports'));
  });
};
