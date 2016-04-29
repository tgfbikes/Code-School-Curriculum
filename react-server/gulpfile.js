'use strict';

var gulp         = require('gulp');
var gutil        = require('gulp-util');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var browserify   = require('browserify');
var reactify     = require('reactify');
var source       = require('vinyl-source-stream'); // Use conventional text streams with Gulp

var config = {
  paths: {
    jade: './client/views/**/*.jade',
    js: './client/js/**/*.js',
    mainJs: './client/js/main.js',
    scss: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      './client/assets/scss/**/*.scss'
    ],
    public: './public'
  }
};

gulp.task('scss', function() {
  return gulp.src(config.paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.public + '/scripts'));
});

gulp.task('default', ['scss', 'js']);
