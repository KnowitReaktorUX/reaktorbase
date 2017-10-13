const browserSync = require('browser-sync').create();
require('dotenv').config();


module.exports = server = {
  start : () => {
      return new Promise((resolve) => {
        browserSync.init({
          server: {
              baseDir: process.env.BUILD_PATH,
              directory: true      
          },
          notify: false,
          reloadDebounce: 500 
        });
      resolve();
    })
  },
  reload : () => {
    return new Promise((resolve) => {
      browserSync.reload();
      resolve();
    })
  } 
};
