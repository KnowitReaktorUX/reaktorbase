const gulp = require('gulp');
const assemble = require('fabricator-assemble');
const runSequence = require('run-sequence');
const del = require('del');
const handlebars = require('handlebars');
const flatten = require('gulp-flatten');
const util = require('gulp-util');
const clean = require('../tools/clean');

require('dotenv').config();

//ASSEMBLE
module.exports = () => {

  const flattenstructure = () => {
      return new Promise((resolve, reject) => {
          gulp.src([process.env.BUILD_PATH + 'tempmockups/**/*.html'])
            .pipe(flatten())
            .pipe(gulp.dest(process.env.BUILD_PATH + 'mockups'))
          .on('end', resolve);
      });
  };

    const buildmocks = () => {
      return new Promise((resolve, reject) => {
          //util.log("build mocks " + process.env.MOCK_COMPONENTS);
          const materials = process.env.MOCK_COMPONENTS.split(',');
          const pages = [process.env.MOCK_PAGES];
          const options = {
              layout: 'default',
              layouts: 'app/framework/*',
              layoutIncludes: 'app/framework/includes/*.html',
              views: pages,
              materials: materials,
              data: 'config/*.{json,yml}',
              docs: 'docs/**/*.md',
              keys: {
                  materials: 'materials',
                  views: 'views',
                  docs: 'docs',
              },
              helpers: require('../helpers')(handlebars),
              logErrors: false,
              onError: (error) => {
                  console.log(error);
              },
              dest: process.env.BUILD_PATH + 'tempmockups',
          };
          assemble(options);
          resolve();
      });
  };

    util.log(util.colors.green('Assembling mockups...'));

    return new Promise((resolve, reject) => {
      buildmocks();
      util.log(util.colors.green('Finished building mockups... 👍'));
      flattenstructure()
        .then(() => {
            clean([process.env.BUILD_PATH + 'tempmockups', process.env.BUILD_PATH + 'temperrors', process.env.BUILD_PATH + 'tempmaintenance']).then(() => {
                util.log(util.colors.gray('Finished ') + util.colors.cyan('assemble... 👍'));
                resolve();
            });
        });
    });

};
