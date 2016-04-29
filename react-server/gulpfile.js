'use strict';

var gulp = require('gulp');
var gutil        = require('gulp-util');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');

var config = {
  paths: {
    jade: './client/views/**/*.jade',
    js: './client/js/**/*.js',
    scss: './client/assets/scss/**/*.scss',
    public: './public'
  }
};

gulp.task('scss', function() {
  return gulp.src(config.paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
  browserify(config.paths.js)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.public + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('default', ['scss', 'js']);
