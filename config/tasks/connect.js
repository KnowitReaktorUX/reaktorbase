var connect = require('gulp-connect');
require('dotenv').config();
module.exports = function (gulp, plugins) {
  return function () {
    //CONNECT
    gulp.task('connect', function() {
      connect.server({
        root: process.env.BUILD_PATH,
        livereload: false
      });
    });
  };
};
