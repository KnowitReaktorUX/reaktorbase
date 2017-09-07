const run = require('gulp-run');

module.exports = function (gulp, plugins) {
  return () => {
    const npmComplete = false;

    //complete
    var complete = function () {
      if (npmComplete) {
        run('asciify "Complete" -f larry3d').exec();
      }
    };

    //npm
    run('npm install').exec(function (status) {
      console.log('-------------------- NPM INSTALL: ' + ((status + '') === 'null' ? 'OK' : status) + ' --------------------');
      npmComplete = true;
      complete();
    });
  };
};
