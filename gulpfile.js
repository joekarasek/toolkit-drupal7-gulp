'use strict';  // Why use strict mode? See http://www.w3schools.com/js/js_strict.asp

////////////////////// Variables and Dependencies ////////////////////

var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var config = require('./gulpconfig.json');



//////////////////////////// Drush Commands //////////////////////////

gulp.task('drushCacheClear', function() {
  shell.task([ 'drush cc all' ]);
  browserSync.reload();
});



////////////////////////////// Watchers ////////////////////////////

gulp.task('module:watch', function() {
  gulp.watch(config.modules, ['drushCacheClear']);
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
});
