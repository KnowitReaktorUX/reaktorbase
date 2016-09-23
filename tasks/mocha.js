var shell = require('gulp-shell');

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('mocha', shell.task('npm test', {
        ignoreErrors: true // So our task doesn't error out when a test fails
    }));
  };
};
