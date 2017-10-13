const browserSync = require('browser-sync').create();
require('dotenv').config();

browserSync.init({
  server: {
      baseDir: process.env.BUILD_PATH,
      directory: true      
  },
  notify: false
});

module.exports = browserSync;
