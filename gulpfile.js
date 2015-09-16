var gulp = require("gulp"),
    plugins = require('gulp-load-plugins')(),
    shell = require('gulp-shell'),
    plugins = require('gulp-load-plugins')({scope: ['dependencies']}),
    runSequence = require('run-sequence'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    flatten = require('gulp-flatten');
    //gulp-watch

//DEVELOP
gulp.task('develop', function (cb) {
    runSequence(
        'build',
        'serve',
        'connect',
        //'server',
        cb
    );
});


//BUILD
gulp.task('build', function (cb) {
    runSequence(
        'clean',
        ['js', 'sass', 'templates', 'assemble'],
        cb
    );
});

//CONNECT
gulp.task('connect', require('./config/tasks/connect')(gulp, plugins));

//ASSEMBLE
gulp.task('assemble', require('./config/tasks/assemble')(gulp, plugins));


//CLEAN
gulp.task('clean', require('./config/tasks/clean')(gulp, plugins));

//JS: MOCHA
gulp.task('mocha', shell.task('npm test', {
    ignoreErrors: true // So our task doesn't error out when a test fails
}));

//JS: TEST
gulp.task('test', function () {
  runSequence('mocha');
  gulp.watch(['app/**/*.js','test/**/*.js'], ['mocha'])
});

//JS: BUILD
gulp.task('js', function (cb) {
    //JS
    browserify({
    	entries: 'app/framework/app.js',
    	debug: true
    })
    .transform(babelify.configure({
		  stage: 0 //Use ES7 transforms
    }))
    .bundle()
    .pipe(source('app/framework/app.js'))
    .pipe(flatten())
    .pipe(gulp.dest('./build/js'));
    cb();
});

//SASS
gulp.task('sass', require('./config/tasks/sass')(gulp, plugins));

//SETUP
gulp.task('setup', require('./config/tasks/setup')(gulp, plugins));

//TEMPLATES
gulp.task('templates', require('./config/tasks/templates')(gulp, plugins));

gulp.task('serve', function () {
    gulp.watch(['app/**/*.js', '*.html', 'app/**/*.html', 'app/**/*.scss'], ['build']);
});
