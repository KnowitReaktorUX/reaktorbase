var run = require('gulp-run');

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('setup', function () {
      var bower_complete = false,
          npm_complete = false;
      //complete
      var complete = function () {
        if (bower_complete && npm_complete) {
          run('asciify "Complete" -f larry3d').exec();
        }
      };
      //bower
      run('bower update').exec(function (status) {
        console.log('-------------------- BOWER UPDATE: ' + ((status + '') === 'null' ? 'OK' : status) + ' --------------------');
        bower_complete = true;
        complete();
      })
      //npm
      run('npm install').exec(function (status) {
        console.log('-------------------- NPM INSTALL: ' + ((status + '') === 'null' ? 'OK' : status) + ' --------------------');
        npm_complete = true;
        complete();
      })
    })
  };
};
