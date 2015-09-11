var connect = require('gulp-connect');
module.exports = function (gulp, plugins) {
  return function () {
    //CONNECT
    gulp.task('connect', function() {
      connect.server({
        root: 'build',
        livereload: false
      });
    });
  };
};
