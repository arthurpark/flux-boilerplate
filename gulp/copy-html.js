var gulp 	   = require('gulp');
var refresh    = require('gulp-livereload');
var preprocess = require('gulp-preprocess');

module.exports = function () {
	return gulp.src('app/assets/**/*.html')
		.pipe(preprocess({context: { dev: true }}))
		.pipe(gulp.dest('public'))
		.pipe(refresh(global.lrserver));
};