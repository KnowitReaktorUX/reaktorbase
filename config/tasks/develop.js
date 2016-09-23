var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('develop', function (cb) {
        runSequence(
            'build',
            'serve',
            'connect',
            cb
        );
    });
  };
};
