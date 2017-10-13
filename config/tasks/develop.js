const runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  return gulp.task('develop', () => {
    process.env.NODE_ENV = 'development';
    process.env.WATCH = 'watch';

    runSequence(
        'build',
        'watch'
    );

  });
};
