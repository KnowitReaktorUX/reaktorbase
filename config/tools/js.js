const gulp = require('gulp');
const browserify = require('browserify');
const server = require('../tools/server');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const flatten = require('gulp-flatten');
const watchify   = require('watchify');
const util = require('gulp-util');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const gulpif = require('gulp-if');
require('dotenv').config();

module.exports = () => {
  const build = () => {
    return browserify('app/framework/app.js', {
      cache: {},
      packageCache: {},
      fullPaths: true,
      transform: ['babelify'],
      debug: process.env.NODE_ENV === 'development',
    });
  };

  const bundle = (bundler, resolve) => {
    util.log(util.colors.green('Bundling scripts...'));
    return bundler.bundle()
      .on('end', () => {
        util.log(util.colors.green('Finished bundling scripts... 👍'));
        server.reload();
        resolve();
      })
      .on('error', (err) => {
        util.log(util.colors.red('Browserify Error 💩 💩'));
        util.log(err.message);
        util.log('\n', err.codeFrame);
        util.beep();
      })
      .pipe(source('app/framework/app.js'))
      .pipe(buffer())
      .pipe(flatten())
      .pipe(gulp.dest(process.env.BUILD_PATH + 'js'))
      .pipe(gulpif(process.env.NODE_ENV !== 'development', uglify()))
      .pipe(gulpif(process.env.NODE_ENV !== 'development', rename({ suffix: '.min' })))
      .pipe(gulpif(process.env.NODE_ENV !== 'development', flatten()))
      .pipe(gulpif(process.env.NODE_ENV !== 'development', gulp.dest(process.env.BUILD_PATH + 'js')));
  };
  
  const dev = (resolve) => {
    const bundler = watchify(build());
    bundler.on('log', util.log);

    //Js build changed, bundle packages again
    bundler.on('update', () => bundle(bundler, resolve));

    //Build js
    bundle(bundler, resolve);
  };

  const prod = (resolve) => {
    const bundler = build();
    bundle(bundler, resolve);
  };

  return new Promise((resolve) => {
    if (process.env.WATCH === 'watch') {
      dev(resolve);
    } else {
      prod(resolve);
    }
  });

};
