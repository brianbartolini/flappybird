var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('scripts', function() {
  return browserify('js/main.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// watch task
gulp.task('watch', function() {
	gulp.watch('js/**', ['scripts']);
	// gulp.watch('site/scss/**/*.scss', ['sass']);
});

// default task
gulp.task('default', ['scripts', 'sass', 'watch']);

// build task
gulp.task('build', ['sass', 'html', 'scripts', 'styles']);
