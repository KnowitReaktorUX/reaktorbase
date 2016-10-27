var del = require('del');

require('dotenv').config();

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('cachebustclean', function (cb) {
      del(process.env.BUILD_PATH + '/**/*-*.*', cb() );
    });
  };
};