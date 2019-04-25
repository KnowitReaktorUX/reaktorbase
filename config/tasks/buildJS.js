const clean = require('../tools/clean');
const eslint = require('../tools/eslint');
const js = require('../tools/js');
const sass = require('../tools/sass');
const assemble = require('../tools/assemble');
const copy = require('../tools/copy');
const server = require('../tools/server');
const util = require('gulp-util');
const runSequence = require('run-sequence');
const manifestfile = require('../tasks/manifestfile');

module.exports = function (gulp, plugins) {
  return gulp.task('buildJS', () => {
    if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';

    util.log(util.colors.cyan(`Building JS for environment ${process.env.NODE_ENV}`));
    return clean([process.env.BUILD_PATH + 'js'])
                  .then(eslint)
                  .then(js)
                  .then(copy)
                  /*.then(() => {
                    runSequence(
                      'manifestfile'
                    );
                  });*/
  });
};
