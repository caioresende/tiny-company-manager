// tasks/serve.js

'use strict';

var browserSync = require('browser-sync');

module.exports = function () {
  browserSync({
    files: ['./app/dist/bundle.js', './app/index.html'],
    server: {
      baseDir: ['./app', './']
    },
    notify: false
  });
};
