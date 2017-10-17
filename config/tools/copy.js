const gulp = require('gulp');
const runSequence = require('run-sequence');
const flatten = require('gulp-flatten');
const util = require('gulp-util');
const {reload} = require('../tools/server');

require('dotenv').config();

module.exports = () => {

  //COPY.IMAGES
  const copyImages = () => {
    return new Promise((resolve, reject) => {
      gulp.src(process.env.MOCK_IMAGES + '**/*', { base: process.env.MOCK_IMAGES })
        .pipe(gulp.dest(process.env.BUILD_PATH + 'images'))
        .on('end', resolve)
        .on('error', reject);
      });
  };

  //COPY.FONTS
  const copyFonts = () => {
    return new Promise((resolve, reject) => {
      gulp.src(process.env.MOCK_FONTS + '**/*', { base: process.env.MOCK_FONTS })
        .pipe(gulp.dest(process.env.BUILD_PATH + 'fonts'))
        .on('end', resolve)
        .on('error', reject);
    });
  };

  //COPY
  util.log(util.colors.green('Copying assets...'));

  return copyImages().then(copyFonts)
    .then(() => {
      util.log(util.colors.green('Finished copying assets... 👍'));
      reload();
    });

};
