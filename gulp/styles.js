var gulp        = require('gulp');
// var sass        = require('gulp-ruby-sass');
var less        = require('gulp-less');
var plumber     = require('gulp-plumber');
var prefix      = require('gulp-autoprefixer');
var notify      = require('gulp-notify');
var refresh     = require('gulp-livereload');
var rename      = require('gulp-rename');

module.exports = function(){

  var styles = gulp.src('app/styles/app.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(prefix('last 1 version', '> 1%', 'ie 8', 'ie 7'))
    .on('error', notify.onError())
    .pipe(gulp.dest('public/styles'))
    .on('end', function (){
        if( global.lrserver ) {
          gulp.src('public/styles/app.css')
              .pipe(refresh(global.lrserver));
        }
      });

  return styles;

};
