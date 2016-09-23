var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('build', function (cb) {
        runSequence(
            'clean',
            ['js', 'sass', 'templates', 'assemble', 'copy'],
            cb
        );
    });
  };
};
