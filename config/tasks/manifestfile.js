const gulp = require("gulp");
const RevAll = require('gulp-rev-all');

require('dotenv').config();
module.exports = () => {
    return gulp.task('manifestfile', () => {
        gulp.src([process.env.BUILD_PATH + 'js/**', process.env.BUILD_PATH + 'stylesheets/**'])
        .pipe(RevAll.revision())
        .pipe(gulp.dest(process.env.BUILD_PATH))
        .pipe(RevAll.manifestFile())
        .pipe(gulp.dest(process.env.BUILD_PATH));
    });
};
