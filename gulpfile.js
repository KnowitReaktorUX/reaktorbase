var gulp = require("gulp"),
    plugins = require('gulp-load-plugins')({scope: ['dependencies']});
    //gulp-watch

//DEVELOP
gulp.task('develop', require('./config/tasks/develop')(gulp, plugins));

//BUILD
gulp.task('build', require('./config/tasks/build')(gulp, plugins));

//CONNECT
gulp.task('connect', require('./config/tasks/connect')(gulp, plugins));

//ASSEMBLE
gulp.task('assemble', require('./config/tasks/assemble')(gulp, plugins));

//COPY
gulp.task('copy', require('./config/tasks/copy')(gulp, plugins));

//CLEAN
gulp.task('clean', require('./config/tasks/clean')(gulp, plugins));

//JS: MOCHA
gulp.task('mocha', require('./config/tasks/mocha')(gulp, plugins));

//JS: TEST
gulp.task('test', require('./config/tasks/test')(gulp, plugins));

//JS: BUILD
gulp.task('js', require('./config/tasks/js')(gulp, plugins));

//SASS
gulp.task('sass', require('./config/tasks/sass')(gulp, plugins));

//SETUP
gulp.task('setup', require('./config/tasks/setup')(gulp, plugins));

//TEMPLATES
gulp.task('templates', require('./config/tasks/templates')(gulp, plugins));

//SERVE
gulp.task('serve', require('./config/tasks/serve')(gulp, plugins));
