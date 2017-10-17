const runSequence = require('run-sequence');
const { start } = require('../tools/server');

module.exports = function (gulp, plugins) {
  return gulp.task('develop', () => {
    process.env.NODE_ENV = 'development';
    process.env.WATCH = 'watch';

    runSequence(
        'build-sass',
        'build-js',
        'build-html',
        'copy-assets',
        'watch',
        () => {
          start();
        }
    );

    

  });
};
