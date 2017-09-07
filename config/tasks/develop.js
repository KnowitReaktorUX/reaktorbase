const runSequence = require('run-sequence');
const server = require('../tools/server');

module.exports = function (gulp, plugins) {
  return gulp.task('develop', () => {
    process.env.NODE_ENV = 'development';
    process.env.WATCH = 'watch';

    runSequence(
        'build',
        'watch'
    );

    server();

  });
};
