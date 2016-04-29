'use strict';

var gulp = require('gulp');

var config = {
  paths: {
    jade: './client/views/**/*.jade',
    js: './client/js/**/*.js',
    scss: './client/assets/scss/**/*.scss',
    public: './public'
  }
};

gulp.task('default', ['jade']);
