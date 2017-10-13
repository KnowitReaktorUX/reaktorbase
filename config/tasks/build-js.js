const clean = require('../tools/clean');
const eslint = require('../tools/eslint');
const js = require('../tools/js');
const copy = require('../tools/copy');
const util = require('gulp-util');

module.exports = function (gulp, plugins) {
  return gulp.task('build-js', () => {
    if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';

    util.log(util.colors.cyan(`Building js`));
    return clean([process.env.BUILD_PATH + 'js'])
      .then(eslint)
      .then(js)
  });
  
};
