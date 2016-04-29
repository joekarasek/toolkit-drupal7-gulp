'use strict';

// Dependencies
var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var config = require('./gulpconfig.json');


// Tasks to run on custom module update
gulp.task('refreshBrowser', ['drushClear'], function(){
  browserSync.reload();
});

gulp.task('drushClear', shell.task([
  'drush cc all'
]));


// Watchers
gulp.task('module:watch', function() {
  gulp.watch(config.modules, ['refreshBrowser']);
});


// Default behavior, sets up browserSync
gulp.task('default', function() {
  browserSync.init({
    // server: {
    //   baseDir: "./",
    //   index: "index.html"
    // }
    proxy: config.proxyUrl,
    port: 8889
  });
  gulp.start('module:watch');
});
