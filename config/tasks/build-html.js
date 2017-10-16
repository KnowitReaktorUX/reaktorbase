const clean = require('../tools/clean');
const assemble = require('../tools/assemble');
const copy = require('../tools/copy');
const util = require('gulp-util');
const runSequence = require('run-sequence');
const manifestfile = require('../tasks/manifestfile');

module.exports = function (gulp, plugins) {
  return gulp.task('build-html', () => {
    if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';

    util.log(util.colors.cyan(`Building html`));
    return clean([process.env.BUILD_PATH + 'mockups'])
      .then(process.env.NODE_ENV == 'production' ? null : assemble)
      .then(copy);
        /*.then(() => {
        .then(() => {
          runSequence(
            'manifestfile'
          );
        });*/;
  });
  
};
