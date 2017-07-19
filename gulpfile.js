// gulpfile.js

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('watch', require('./tasks/watch'));
gulp.task('bundle', require('./tasks/bundle'));
gulp.task('bundle-prod', require('./tasks/bundle-prod'));
gulp.task('sass', require('./tasks/sass'));
gulp.task('sass-prod', require('./tasks/sass-prod'));
gulp.task('sync', require('./tasks/sync'));
gulp.task('copy-index', require('./tasks/copy'));

gulp.task('default', [], function() {
  return runSequence('sass', 'bundle', 'watch', 'sync');
});

gulp.task('buildProd', [], function() {
  return runSequence('sass-prod', 'bundle-prod', 'copy-index');
});
