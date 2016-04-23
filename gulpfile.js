var gulp      = require('gulp');
var LiveSever = require('gulp-live-server');
var browserSync = require('browser-sync');


// Live updates when main.js is edited and saved
gulp.task('live-server', function() {
  var server = new LiveSever('server/main.js');
  server.start();
});

// Dependent on live-update task, automatically opens browser on localhost 7777
gulp.task('serve', ['live-server'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:7777",
    port: 9001
  });
});
