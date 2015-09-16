var assemble = require('fabricator-assemble'),
    runSequence = require('run-sequence'),
    del = require('del'),
    handlebars = require('handlebars'),
    flatten = require('gulp-flatten');

//ASSEMBLE
module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('assemble', function (cb) {
      runSequence(
          'buildmocks',
          'flatten',
          'del',
          cb
      );
    });

    gulp.task('del', function () {
      del('build/tempmockups');
    });

    gulp.task('flatten', function () {
      gulp.src('build/tempmockups/**/*.html')
        .pipe(flatten())
        .pipe(gulp.dest('build/mockups'));
    });

    gulp.task('buildmocks', function () {
      var options = {
          layout: 'default',
          layouts: 'app/framework/*',
          layoutIncludes: 'app/framework/includes/*.html',
          views: ['app/pages/**/*.html'],
          materials: ['app/blocks/**/*.html', 'app/components/**/*.html'],
          data: 'config/*.{json,yml}',
          docs: 'docs/**/*.md',
          keys: {
              materials: 'materials',
              views: 'views',
              docs: 'docs'
          },
          helpers: require('../../bower_components/knowit-ninja/helpers')(handlebars),
          logErrors: false,
          onError: function(error) {
            //console.log(error);
          },
          dest: 'build/tempmockups'
      };

      return assemble(options);
    });
  };
};
