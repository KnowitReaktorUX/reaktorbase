var eslint = require('gulp-eslint');

module.exports = function (gulp, plugins) {
    return function () {
        gulp.task('eslint', function (cb) {
            gulp.src('app/**/*.js')
                .pipe(eslint())
                .pipe(eslint.format())
                .pipe(eslint.failAfterError());
            cb();
        });
    };
};