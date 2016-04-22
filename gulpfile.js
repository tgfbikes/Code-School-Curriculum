var gulp      = require('gulp');
var LiveSever = require('gulp-live-server');

gulp.task('live-server', function() {
  var server = new LiveSever('server/main.js');
  server.start();
});
