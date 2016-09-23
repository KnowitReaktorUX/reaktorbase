var del = require('del');
module.exports = function (gulp, plugins) {
  return function () {
    //CLEAN
    gulp.task('clean', function (cb) {
      del('js', cb() );
    });
  };
};
