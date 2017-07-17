// gulpfile.js

'use strict';

var gulp = require('gulp');

gulp.task('serve', ['sass', 'bundle', 'watch'], require('./tasks/serve'));
gulp.task('watch', require('./tasks/watch'));
gulp.task('bundle', require('./tasks/bundle'));
gulp.task('sass', require('./tasks/sass'));

gulp.task('default', ['serve']);
