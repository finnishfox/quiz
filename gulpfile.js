const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const concatJs = require('gulp-concat');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const glob = require('glob');


gulp.task('sass-to-css', () => gulp.src('source/components/**/*.scss').pipe(sass()).pipe(concatCss('bundle.css'))
  .pipe(gulp.dest('./dest/css')));

// gulp.task('concat-js', () => {
//   return gulp.src('source/components/**/*.js')
//     .pipe(concatJs('script.js'))
//     .pipe(gulp.dest('source/js'));
// });

gulp.task('build-js', function () {
  const files = glob.sync('./source/**/**/*.js');

  return browserify({entries: files, extensions: ['.js']})
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dest/js'));
});


gulp.task('default', () => {
  runSequence('sass-to-css','build-js');
});

gulp.watch('source/**/**/*.*', ['default']);