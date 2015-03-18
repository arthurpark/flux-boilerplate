var gulp = require('gulp');

module.exports = function () {
	gulp.src('app/assets/fonts/**/*')
		.pipe(gulp.dest('public/fonts'));

	gulp.src('app/assets/images/**/*')
		.pipe(gulp.dest('public/images'));
};