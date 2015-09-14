var assemble = require('assemble'),
    gulpAssemble = require('gulp-assemble'),
    extname = require('gulp-extname'),
    flatten = require('gulp-flatten');
//ASSEMBLE
module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('assemble', function() {
      assemble.layouts('./app/framework/default.hbs');
      //assemble.partials(['./app/components', './app/blocks']);
      //doesnt seem able to handle multiple partial locations.
      assemble.helpers(['./bower_components/knowit-ninja/helpers/times.js']);
      assemble.partials(['./app/**/*.hbs']);
      assemble.data(['config/*.{json,yml}']);

      gulp.src('./app/pages/**/*.hbs')
        .pipe(gulpAssemble(assemble, {
          layout: 'default'
        }))
        .pipe(extname())
        .pipe(flatten())
        .pipe(gulp.dest('build/mockups'));
    });
  };
};
