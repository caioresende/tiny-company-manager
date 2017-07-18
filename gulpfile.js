// gulpfile.js

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('watch', require('./tasks/watch'));
gulp.task('bundle', require('./tasks/bundle'));
gulp.task('sass', require('./tasks/sass'));
gulp.task('sync', require('./tasks/sync'));

gulp.task('default', [], function() {
  return runSequence('sass', 'bundle', 'watch', 'sync');
});

gulp.task('buildProd', [], function() {
  return runSequence('sass', 'bundle');
});
