const wcagAccess = require('gulp-wcag-accessibility');
const del = require('del');
const reportsPath = process.env.BUILD_PATH + 'accessibility-reports';

module.exports = function (gulp, plugins) {
  gulp.task('accessibility', function() {
    del(reportsPath, { force: true })
    .then(function () {
      return gulp.src(process.env.BUILD_PATH + 'mockups/*.html')
        .pipe(wcagAccess({
            accessibilityLevel: 'WCAG2A', // Levels are WCAG2A, WCAG2AA, WCAG2AAA, and Section508
            maxBuffer: '1024*1024',
            force: true,
            verbose: false,
            reportLevels: {
                notice: true,
                warning: true,
                error: true
            },
            reportLocation: reportsPath,
            /*forceUrls: true,
            urls: [
                'http://www.knowit.se'
            ]*/
        }))
    }, function (reason) {
        resolve();
    });
  });
};
