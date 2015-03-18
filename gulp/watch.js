var gulp        = require('gulp');
var refresh     = require('gulp-livereload');

// Watch
module.exports = function () {
  gulp.watch('app/assets/**/*.html', ['copy:html']);
  gulp.watch('app/styles/**/*.less', ['styles']);
  gulp.watch('app/**/*', ['scripts']);
};
