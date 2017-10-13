const runSequence = require('run-sequence');

module.exports = (gulp, plugins) => {
  return gulp.task('default', () => {
    process.env.NODE_ENV = 'development';
    
    runSequence(
        'build-html',
        'build-sass',
        'build-js'
    );
  });
};
