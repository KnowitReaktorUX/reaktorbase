const gulp = require('gulp');
const eslint = require('gulp-eslint');
const util = require('gulp-util');

module.exports = () => {
  util.log(util.colors.green('Linting js...'));
  return new Promise((resolve, reject) => {
    gulp.src('app/**/*.js')
         .pipe(eslint().on('end', resolve).on('error', resolve))
         .pipe(eslint.format())
         .pipe(eslint.failAfterError())
         .on('error', resolve);
  });
};
