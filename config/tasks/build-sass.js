const sass = require('../tools/sass');
const util = require('gulp-util');
const clean = require('../tools/clean');

module.exports = function (gulp, plugins) {
  return gulp.task('build-sass', () => {
    if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';

    util.log(util.colors.cyan(`Building scss`));
    return clean([process.env.BUILD_PATH + 'stylesheets'])
      .then(sass)
  });
  
};
