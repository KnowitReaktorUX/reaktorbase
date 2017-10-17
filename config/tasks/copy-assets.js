const copy = require('../tools/copy');
const clean = require('../tools/clean');

module.exports = function (gulp, plugins) {
  return gulp.task('copy-assets', () => {
    return clean([process.env.BUILD_PATH + 'fonts',process.env.BUILD_PATH + 'images'])
      .then(copy);
  });
  
};
