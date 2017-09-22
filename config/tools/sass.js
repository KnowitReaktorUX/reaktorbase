const gulp = require('gulp');
const sass = require('gulp-sass');
const flatten = require('gulp-flatten');
const util = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const cache = require('gulp-cached');

require('dotenv').config();

module.exports = () => {
  util.log(util.colors.green('Compiling CSS...'));
  return new Promise((resolve, reject) => {
      gulp.src('app/**/*.scss')
      .pipe(gulpif(process.env.NODE_ENV === 'development', sourcemaps.init()))
      .pipe(cache())
      .pipe(sass({
        //includePaths: ['node_modules/foundation-sites/scss'],
        outputStyle: process.env.NODE_ENV === 'development' ? 'expanded' : 'compressed',
      }).on('error', sass.logError))
      .pipe(gulpif(process.env.NODE_ENV === 'development', sourcemaps.write()))
      .pipe(flatten())
      .pipe(gulp.dest(process.env.BUILD_PATH + 'stylesheets'))
      .on('end', () => {
        util.log(util.colors.green('Finished compiling CSS... 👍'));
        resolve();
      })
      .on('error', reject);
    });
};