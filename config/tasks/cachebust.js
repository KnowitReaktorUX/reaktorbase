var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('cachebust', function (cb) {
        runSequence(
            'cachebustclean',
            ['cachebustjs', 'cachebustcss'],
            cb
        );
    });
  };
};