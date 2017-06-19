const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const concatJs = require('gulp-concat');
const runSequence = require('run-sequence');

gulp.task('sass-to-css', () => gulp.src('source/components/**/*.scss').pipe(sass()).pipe(concatCss('bundle.css'))
  .pipe(gulp.dest('css')));

gulp.task('concat-js', () => gulp.src('source/components/**/*.js')
  .pipe(concatJs('script.js'))
  .pipe(gulp.dest('js/')));



gulp.task('default', () => {
  runSequence( 'sass-to-css', 'concat-js');
});

gulp.watch('source/components/**/*.*', ['default']);