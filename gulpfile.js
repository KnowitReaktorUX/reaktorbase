var gulp = require("gulp"),
    plugins = require('gulp-load-plugins')(),
    shell = require('gulp-shell'),
    plugins = require('gulp-load-plugins')({scope: ['dependencies']}),
    runSequence = require('run-sequence'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    del = require('del'),
    sass = require('gulp-sass'),
    run = require('gulp-run'),
    flatten = require('gulp-flatten'),
    connect = require('gulp-connect'),
    assemble = require('assemble'),
    gulpAssemble = require('gulp-assemble'),
    extname = require('gulp-extname');
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
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: false
  });
});

//ASSEMBLE
gulp.task('assemble', function() {
  assemble.layouts('./app/framework/default.hbs');
  //assemble.partials(['./app/components', './app/blocks']);
  assemble.data(['config/*.{json,yml}']);


  gulp.src('./app/pages/**/*.hbs')
    .pipe(gulpAssemble(assemble, {
      layout: 'default'
    }))
    .pipe(extname())
    .pipe(flatten())
    .pipe(gulp.dest('build/mockups'));
});

//CLEAN
gulp.task('clean', function (cb) {
  del('js', cb() );
});

//JS: MOCHA
gulp.task('mocha', shell.task('npm test', {
    // So our task doesn't error out when a test fails
    ignoreErrors: true
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



//Fetch Bower & npm components
gulp.task('setup', function () {
  var bower_complete = false,
      npm_complete = false;
  //complete
  var complete = function () {
    if (bower_complete && npm_complete) {
      run('asciify "Complete" -f larry3d').exec();
    }
  };
  //bower
  run('bower update').exec(function (status) {
    console.log('-------------------- BOWER UPDATE: ' + ((status + '') === 'null' ? 'OK' : status) + ' --------------------');
    bower_complete = true;
    complete();
  })
  //npm
  run('npm install').exec(function (status) {
    console.log('-------------------- NPM INSTALL: ' + ((status + '') === 'null' ? 'OK' : status) + ' --------------------');
    npm_complete = true;
    complete();
  })
})

//TEMPLATES
//change to template names to .ejs, look att contains "template" instead.
//gulp-flatten - remove folder structure in destination.
gulp.task('templates', function (cb) {
  gulp.src('app/**/*.template')
    .pipe(flatten())
    .pipe(gulp.dest('./build/templates'));
    cb();
});

gulp.task('serve', function () {
    gulp.watch(['app/**/*.js', '*.html', 'app/**/*.hbs', 'app/**/*.scss'], ['build']);
});
