var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('test', function () {
      runSequence('mocha');
      gulp.watch(['app/**/*.js','test/**/*.js'], ['mocha'])
    });
  };
};
