const gulp = require("gulp");
const revAll = require('gulp-rev-all');
const del = require('del');
const util = require('gulp-util');

require('dotenv').config();

module.exports = () => {
	return new Promise((resolve, reject) => {
		gulp.src([process.env.BUILD_PATH + 'js/**', process.env.BUILD_PATH + 'stylesheets/**'])
		.pipe(revAll.revision())
		.pipe(gulp.dest(process.env.BUILD_PATH))
		.pipe(revAll.manifestFile())
		.pipe(gulp.dest(process.env.BUILD_PATH));
	});
};
