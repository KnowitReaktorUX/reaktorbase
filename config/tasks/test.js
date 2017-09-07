const testrunner = require('../tools/testrunner');
const runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  return gulp.task('test', () => {
    gulp.watch(['app/**/*.js', 'test/**/*.js'], testrunner());
  });
};
