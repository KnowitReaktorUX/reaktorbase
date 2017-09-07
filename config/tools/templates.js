const gulp = require('gulp');
const flatten = require('gulp-flatten');

module.exports = function () {
  //change to template names to .hbs, look att contains "template" instead.
  return new Promise((resolve, reject) => {
    gulp.src('app/**/*.template')
      .pipe(flatten())
      .pipe(gulp.dest(process.env.BUILD_PATH + 'templates'))
      .on('end', resolve)
      .on('error', reject);
    });
};
