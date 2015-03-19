var gulp = require('gulp');

module.exports = function () {
	gulp.src('app/assets/fonts/**/*')
		.pipe(gulp.dest('public/fonts'));

  gulp.src('bower_components/material-design-icons/navigation/svg/production/*')
    .pipe(gulp.dest('public/images/icons'));

	gulp.src('app/assets/images/**/*')
		.pipe(gulp.dest('public/images'));
};