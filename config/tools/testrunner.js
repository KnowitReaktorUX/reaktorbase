const gulp = require('gulp');
const exec = require('child_process');
const util = require('gulp-util');

module.exports = () => {
  const options = {
    continueOnError: true,
  };

  util.log(util.colors.green('Running npm test...'));
  return new Promise((resolve, reject) => {
    exec.exec('npm test', options, (err, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      resolve();
    });
  });
};
