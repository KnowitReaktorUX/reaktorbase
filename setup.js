/*
    Work in progress so do not use!
*/

/*  README:
    Needs to be installed on the client:
    Node(0.12.x), Node available at: https://nodejs.org/
    Git, Git available at: http://git-scm.com/downloads
*/

//require
var exec = require('child_process').exec;

//status: message
var status_message = function (message, exit) {
      console.log('=> ' + message);
      (exit == undefined || exit == false) ? exit : process.exit();
    },
    section_divider = function (section) {
        console.log('-------------------- ' + section + ' --------------------');
    };

//node
var node_version = Number(process.version.match(/^v(\d+\.)(\d+)/)[2]),
    node_version_accepted = node_version === 12 ? true : false,
    node_packages_install = function (fn) {
      exec('npm install', function (err, out, stderr) {
        fn((err != null) ? false : true);
        err == null ? setup.step_2() : err; //if no error occured, proceed with step 2.
      });
    };

//git
var git_installed = function (fn) {
      exec('git --version', function (err, out, stderr) {
        fn((err != null) ? false : true, out.toString().trim());
        err == null ? setup.step_3() : err; //if no error occured, proceed with step 3.
      });
    };

//gulp
var gulp_installed = function (fn) {
      exec('gulp -v', function(err, out, stderr) {
        fn((err != null) ? false : true);
      });
    };

//setup
var setup = function () {
  var node_success_msg = 'Node version: OK, expected v0.12.x, yours: ' + process.version,
      node_fail_msg = 'Wrong version of Node, should be: v0.12.x, yours is: ' + process.version + '. Node available at: https://nodejs.org/',
      npm_success_msg = 'Node packages: Installed',
      npm_fail_msg = 'Unable to install node packages, try to install them manually (npm install). then re-run this script.',
      git_success_msg = 'Git Installed',
      git_fail_msg = 'Unable to find git, needs to be installed manually, Git available at: http://git-scm.com/downloads',
      gulp_success_msg = 'Gulp Installed',
      gulp_empty_msg = '',
      gulp_fail_msg = '';

  /*  STEP 1:
      check node version, then update/install node packages. */
      var step_1 = function () {
        section_divider('node');
        //node version
        if (node_version_accepted) status_message(node_success_msg);
        else status_message(node_fail_msg, true);
        //node packages
        node_packages_install( function (status) {
          if (status) status_message(npm_success_msg);
          else status_message(npm_fail_msg, true);
        });
      }();

  /*  STEP 2:
      check if git is installed. */
      var step_2 = function () {
        section_divider('git');
        git_installed( function (status, version) {
          if (status) status_message(git_success_msg + ', current version: ' + version, false);
          else status_message(git_fail_msg, true);
        });
      };

  /*  STEP 3:
      check if gulp is installed, otherwise install, and build the project (gulp develop) */
      var step_3 = function () {
        section_divider('gulp');
        gulp_installed( function (status) {
          if (status) status_message(gulp_success_msg);
          else status_message(gulp_fail_msg, true);
        });
      };

      return {
        step_1: step_1,
        step_2: step_2,
        step_3: step_3
      };
}();
