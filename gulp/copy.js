var gulp     = require('gulp');
// var refresh    = require('gulp-livereload');
// var preprocess = require('gulp-preprocess');

module.exports = function () {
  gulp.src('app/assets/**/*.html')
    // .pipe(preprocess({context: { dev: true }}))
    .pipe(gulp.dest('public'));
    // .pipe(refresh(global.lrserver));

  gulp.src('app/assets/fonts/**/*')
    .pipe(gulp.dest('public/fonts'));

  gulp.src('bower_components/material-design-icons/navigation/svg/production/*')
    .pipe(gulp.dest('public/images/icons'));

  gulp.src('app/assets/images/**/*')
    .pipe(gulp.dest('public/images'));
};