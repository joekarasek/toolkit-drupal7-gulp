'use strict';  // Why use strict mode? See http://www.w3schools.com/js/js_strict.asp

////////////////////// Variables and Dependencies ////////////////////

var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var config = require('./gulpconfig.json');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var rename = require('gulp-rename');



//////////////////////////// Drush Commands //////////////////////////

gulp.task('drushCacheClear',
  shell.task([ 'drush cc all' ])
);



//////////////////////////////// SASS //////////////////////////////

gulp.task('scss', function () {
  return gulp.src(config.stylesheets)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({dirname: './'}))
    .pipe(gulp.dest(config.currentTheme + '/css'));
});



////////////////////////////// Watchers ////////////////////////////

gulp.task('module:watch', function() {
  gulp.watch(config.modules, ['drushCacheClear'], function() {
    browserSync.reload();
  });
});

gulp.task('scss:watch', ['scss'], function () {
  gulp.watch(config.stylesheets, ['scss'], function() {
    browserSync.reload();
  });
});

gulp.task('theme:watch', function() {
  gulp.watch(config.themes, ['drushCacheClear'], function() {
    browserSync.reload();
  });
});



////////////////////// Default: Serve and Watch ////////////////////

gulp.task('default', function() {

  // Initiate browserSync
  browserSync.init({
    proxy: config.proxyUrl,
    port: 8889
  });

  // Start Watchers
  gulp.start('module:watch');
  gulp.start('scss:watch');
  gulp.start('theme:watch');
});
